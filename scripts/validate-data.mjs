import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const categories = new Set([
  "online_video",
  "cloud_search",
  "magnet_search",
  "subtitles",
  "player",
  "subscription",
  "membership",
  "other"
]);
const statuses = new Set([
  "pending",
  "verified",
  "recommended",
  "caution",
  "temporarily_unavailable",
  "removed"
]);
const risks = new Set(["low", "medium", "high", "unknown"]);
const methods = new Set(["manual", "automated", "mixed"]);
const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const idPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const errors = [];

async function readJson(path) {
  try {
    return JSON.parse(await readFile(new URL(path, root), "utf8"));
  } catch (error) {
    errors.push(`${path}: cannot parse JSON (${error.message})`);
    return null;
  }
}

function check(condition, message) {
  if (!condition) {
    errors.push(message);
  }
}

function checkDate(value, path) {
  check(typeof value === "string" && datePattern.test(value), `${path}: expected YYYY-MM-DD`);
}

function checkScore(value, path) {
  check(
    typeof value === "number" && value >= 1 && value <= 5 && Number.isInteger(value * 10),
    `${path}: expected a score from 1.0 to 5.0 with at most one decimal`
  );
}

const resourcesData = await readJson("resources/resources.json");
const verificationsData = await readJson("reports/verifications.json");
await readJson("reports/notices.json");

if (resourcesData) {
  checkDate(resourcesData.updated_at, "resources.updated_at");
  check(Array.isArray(resourcesData.resources), "resources.resources: expected an array");
}

const resourceIds = new Set();
for (const [index, resource] of (resourcesData?.resources ?? []).entries()) {
  const path = `resources.resources[${index}]`;
  check(idPattern.test(resource.id ?? ""), `${path}.id: invalid or missing id`);
  check(!resourceIds.has(resource.id), `${path}.id: duplicate id "${resource.id}"`);
  resourceIds.add(resource.id);
  check(typeof resource.name === "string" && resource.name.length > 0, `${path}.name: required`);
  check(typeof resource.url === "string" && resource.url.startsWith("https://"), `${path}.url: expected HTTPS URL`);
  check(categories.has(resource.category), `${path}.category: unknown category "${resource.category}"`);

  for (const score of ["more", "speed", "clean", "stable", "ease"]) {
    checkScore(resource.scores?.[score], `${path}.scores.${score}`);
  }
  for (const risk of ["copyright", "safety", "privacy", "payment"]) {
    check(risks.has(resource.risks?.[risk]), `${path}.risks.${risk}: unknown risk level`);
  }

  check(statuses.has(resource.verification?.status), `${path}.verification.status: unknown status`);
  check(methods.has(resource.verification?.method), `${path}.verification.method: unknown method`);
  checkDate(resource.verification?.last_checked, `${path}.verification.last_checked`);
  checkDate(resource.source?.added_at, `${path}.source.added_at`);
}

if (verificationsData) {
  checkDate(verificationsData.updated_at, "verifications.updated_at");
  check(Array.isArray(verificationsData.records), "verifications.records: expected an array");
}

const verificationIds = new Set();
for (const [index, record] of (verificationsData?.records ?? []).entries()) {
  const path = `verifications.records[${index}]`;
  check(typeof record.id === "string" && record.id.length > 0, `${path}.id: required`);
  check(!verificationIds.has(record.id), `${path}.id: duplicate id "${record.id}"`);
  verificationIds.add(record.id);
  checkDate(record.checked_at, `${path}.checked_at`);
  check(methods.has(record.method), `${path}.method: unknown method`);

  for (const resourceId of record.resource_ids ?? []) {
    check(resourceIds.has(resourceId), `${path}.resource_ids: unknown resource "${resourceId}"`);
  }
}

if (errors.length > 0) {
  console.error(`Data validation failed with ${errors.length} error(s):`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exitCode = 1;
} else {
  console.log(
    `Data validation passed: ${resourceIds.size} resources, ${verificationIds.size} verification records.`
  );
}

