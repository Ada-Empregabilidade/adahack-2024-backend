require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const ageGroups = await Promise.all(
    [
      { code: "under-18", description: "Menos de 18 anos" },
      { code: "18-24", description: "18-24 anos" },
      { code: "25-34", description: "25-34 anos" },
      { code: "35-44", description: "35-44 anos" },
      { code: "45-54", description: "45-54 anos" },
      { code: "55-64", description: "55-64 anos" },
      { code: "65-plus", description: "65 anos ou mais" },
    ].map(async (group) => await prisma.ageGroup.create({ data: group }))
  );

  const genders = await Promise.all(
    [
      { code: "cis-male", value: "Homem cisgênero" },
      { code: "cis-female", value: "Mulher cisgênero" },
      { code: "trans-male", value: "Homem transgênero" },
      { code: "trans-female", value: "Mulher transgênero" },
      { code: "non-binary", value: "Não-binário" },
      { code: "prefer-not-to-say", value: "Prefiro não dizer" },
      { code: "other", value: "Outro" },
    ].map(async (gender) => await prisma.gender.create({ data: gender }))
  );

  const ethnicities = await Promise.all(
    [
      { code: "white", value: "Branco - Caucasiano" },
      { code: "black", value: "Negro - Africano/Afro-americano" },
      { code: "hispanic-latino", value: "Hispânico ou Latino" },
      { code: "asian", value: "Asiático" },
      { code: "indigenous", value: "Indígena" },
      { code: "prefer-not-to-say", value: "Prefiro não dizer" },
      { code: "other", value: "Outro" },
    ].map(
      async (ethnicity) => await prisma.ethnicity.create({ data: ethnicity })
    )
  );

  const disabilities = await Promise.all(
    [
      { code: "visual-impairment", value: "Deficiência visual" },
      { code: "hearing-impairment", value: "Deficiência auditiva" },
      { code: "motor-disability", value: "Deficiência motora" },
      { code: "intellectual-disability", value: "Deficiência intelectual" },
      { code: "psychosocial-disability", value: "Deficiência psicossocial" },
      { code: "no-disability", value: "Não possuo deficiência" },
      { code: "prefer-not-to-say", value: "Prefiro não dizer" },
      { code: "other", value: "Outra" },
    ].map(async (disability) => prisma.disability.create({ data: disability }))
  );

  const numResponses = 10000;
  const getRandomItem = (array) =>
    array[Math.floor(Math.random() * array.length)];

  for (let i = 0; i < numResponses; i++) {
    const parentValue = randomWithNull();
    const lgbtqiaValue = randomWithNull();

    await prisma.diversityResponse.create({
      data: {
        ageGroupId: getRandomItem(ageGroups).id,
        genderId: getRandomItem(genders).id,
        ethnicityId: getRandomItem(ethnicities).id,
        lgbtqia: lgbtqiaValue,
        parent: parentValue,
        disabilityId: getRandomItem(disabilities).id,
        isInternalResponse: Math.random() < 0.1,
      },
    });
  }

  function randomWithNull() {
    const rand = Math.random();
    if (rand < 0.33) {
      return true;
    } else if (rand < 0.66) {
      return false;
    } else {
      return null;
    }
  }
}

main()
  .catch((e) => {
    console.error(`An error occurred: ${e.message}`);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
