/*
 await prisma.meal.createMany({
    data: [
      // Śniadania
      {
        title: 'Pożywna Owsianka z Owocami',
        description: 'Klasyczna owsianka z dodatkiem świeżych owoców i orzechów.',
        kcal: 350,
        carbohydrates: 55,
        protein: 10,
        fat: 8,
        preparation: 'Gotuj płatki owsiane w mleku, dodaj pokrojone owoce i orzechy.',
        ingredients: ['Płatki owsiane', 'Mleko', 'Jagody', 'Banan', 'Orzechy', 'Miód'],
        type: MealType.BREAKFAST,
      },
      {
        title: 'Jajecznica z Warzywami',
        description: 'Jajecznica z papryką, pomidorami i cebulą.',
        kcal: 300,
        carbohydrates: 15,
        protein: 20,
        fat: 18,
        preparation: 'Smaż jajka z pokrojonymi warzywami na patelni.',
        ingredients: ['Jaja', 'Papryka', 'Pomidory', 'Cebula', 'Oliwa z oliwek'],
        type: MealType.BREAKFAST,
      },
      {
        title: 'Smoothie Bananowo-Szpinakowe',
        description: 'Smoothie z banana i świeżego szpinaku.',
        kcal: 250,
        carbohydrates: 40,
        protein: 5,
        fat: 4,
        preparation: 'Blenduj banana, szpinak i jogurt naturalny.',
        ingredients: ['Banan', 'Szpinak', 'Jogurt naturalny'],
        type: MealType.BREAKFAST,
      },
      {
        title: 'Tosty z Awokado i Jajkiem',
        description: 'Tosty z pastą z awokado i gotowanym jajkiem.',
        kcal: 320,
        carbohydrates: 30,
        protein: 15,
        fat: 18,
        preparation: 'Posmaruj tosty pastą z awokado i dodaj pokrojone jajko.',
        ingredients: ['Chleb pełnoziarnisty', 'Awokado', 'Jajko', 'Sól', 'Pieprz'],
        type: MealType.BREAKFAST,
      },
      // Drugie Śniadania
      {
        title: 'Jogurt z Musli i Owocami',
        description: 'Jogurt naturalny z musli i świeżymi owocami.',
        kcal: 300,
        carbohydrates: 40,
        protein: 10,
        fat: 8,
        preparation: 'Wymieszaj jogurt z musli i dodaj pokrojone owoce.',
        ingredients: ['Jogurt naturalny', 'Musli', 'Owoce sezonowe'],
        type: MealType.SECOND_BREAKFAST,
      },
      {
        title: 'Kanapki z Chudą Wędliną i Warzywami',
        description: 'Kanapki z chudą wędliną, sałatą i pomidorami.',
        kcal: 280,
        carbohydrates: 35,
        protein: 15,
        fat: 10,
        preparation: 'Złóż wędlinę i warzywa między kromki chleba.',
        ingredients: ['Chleb pełnoziarnisty', 'Wędliny', 'Sałata', 'Pomidory', 'Ogórek'],
        type: MealType.SECOND_BREAKFAST,
      },
      {
        title: 'Sałatka Owocowa z Orzechami',
        description: 'Świeża sałatka owocowa z dodatkiem orzechów.',
        kcal: 250,
        carbohydrates: 35,
        protein: 5,
        fat: 12,
        preparation: 'Pokrój owoce i wymieszaj z orzechami.',
        ingredients: ['Owoce sezonowe', 'Orzechy'],
        type: MealType.SECOND_BREAKFAST,
      },
      {
        title: 'Chia Pudding z Owocami',
        description: 'Pudding chia z dodatkiem świeżych owoców.',
        kcal: 280,
        carbohydrates: 25,
        protein: 8,
        fat: 14,
        preparation: 'Wymieszaj nasiona chia z mlekiem i odstaw na kilka godzin, następnie dodaj owoce.',
        ingredients: ['Nasiona chia', 'Mleko', 'Owoce'],
        type: MealType.SECOND_BREAKFAST,
      },
      // Obiady
      {
        title: 'Kurczak w Sosie Pomidorowym z Ryżem',
        description: 'Soczysty kurczak w sosie pomidorowym podany z ryżem.',
        kcal: 450,
        carbohydrates: 60,
        protein: 35,
        fat: 12,
        preparation: 'Smaż kurczaka w sosie pomidorowym, podawaj z ugotowanym ryżem.',
        ingredients: ['Kurczak', 'Sos pomidorowy', 'Ryż', 'Przyprawy'],
        type: MealType.LUNCH,
      },
      {
        title: 'Sałatka Cezar z Kurczakiem',
        description: 'Klasyczna sałatka Cezar z grillowanym kurczakiem.',
        kcal: 400,
        carbohydrates: 20,
        protein: 30,
        fat: 22,
        preparation: 'Wymieszaj sałatę, kurczaka, grzanki i sos Cezar.',
        ingredients: ['Sałata', 'Grillowany kurczak', 'Grzanki', 'Sos Cezar'],
        type: MealType.LUNCH,
      },
      {
        title: 'Spaghetti Bolognese',
        description: 'Makaron spaghetti z klasycznym sosem bolognese.',
        kcal: 500,
        carbohydrates: 70,
        protein: 30,
        fat: 15,
        preparation: 'Gotuj makaron i sos bolognese, wymieszaj przed podaniem.',
        ingredients: ['Makaron spaghetti', 'Mięso mielone', 'Sos pomidorowy', 'Cebula', 'Przyprawy'],
        type: MealType.LUNCH,
      },
      {
        title: 'Kurczak Tandoori z Warzywami',
        description: 'Kurczak marynowany w przyprawach tandoori, pieczony z warzywami.',
        kcal: 450,
        carbohydrates: 25,
        protein: 35,
        fat: 20,
        preparation: 'Marynuj kurczaka w przyprawach tandoori, piecz z warzywami.',
        ingredients: ['Kurczak', 'Przyprawy tandoori', 'Warzywa (np. papryka, cukinia)'],
        type: MealType.LUNCH,
      },
      {
        title: 'Zupa Brokułowa z Grzankami',
        description: 'Kremowa zupa brokułowa podana z chrupiącymi grzankami.',
        kcal: 350,
        carbohydrates: 35,
        protein: 10,
        fat: 15,
        preparation: 'Gotuj brokuły, zmiksuj na krem, podawaj z grzankami.',
        ingredients: ['Brokuły', 'Cebula', 'Bulion', 'Grzanki'],
        type: MealType.LUNCH,
      },
      // Kolacje
      {
        title: 'Łosoś z Warzywami',
        description: 'Pieczony łosoś z mieszanką warzyw.',
        kcal: 400,
        carbohydrates: 20,
        protein: 30,
        fat: 20,
        preparation: 'Piecz łosoś z warzywami w piekarniku.',
        ingredients: ['Łosoś', 'Warzywa (np. brokuły, marchewka)', 'Przyprawy'],
        type: MealType.DINNER,
      },
      {
        title: 'Tortilla z Kurczakiem i Warzywami',
        description: 'Tortilla z grillowanym kurczakiem, warzywami i sosem.',
        kcal: 350,
        carbohydrates: 40,
        protein: 20,
        fat: 12,
        preparation: 'Zawijaj grillowanego kurczaka, warzywa i sos w tortilli.',
        ingredients: ['Tortilla', 'Kurczak', 'Warzywa (np. papryka, cebula)', 'Sos jogurtowy'],
        type: MealType.DINNER,
      },
      {
        title: 'Makaron z Warzywami i Serem',
        description: 'Makaron z warzywami i startym serem.',
        kcal: 450,
        carbohydrates: 60,
        protein: 15,
        fat: 18,
        preparation: 'Gotuj makaron, dodaj warzywa i posyp startym serem.',
        ingredients: ['Makaron', 'Warzywa (np. cukinia, pomidory)', 'Ser'],
        type: MealType.DINNER,
      },
      {
        title: 'Sałatka z Tuńczykiem',
        description: 'Sałatka z tuńczykiem, jajkiem i oliwkami.',
        kcal: 350,
        carbohydrates: 15,
        protein: 25,
        fat: 20,
        preparation: 'Wymieszaj składniki sałatki i dopraw.',
        ingredients: ['Tuńczyk', 'Jajka', 'Oliwki', 'Sałata', 'Sos winegret'],
        type: MealType.DINNER,
      },
    ],
  });

  console.log('Sample data has been added to the database.');
}
*/

import { PrismaClient, MealType } from '@prisma/client';

const prisma = new PrismaClient();

export async function main() {
    await prisma.meal.createMany({
        data: [
            // Śniadania
            {
                title: 'Pożywna Owsianka z Owocami',
                description: 'Klasyczna owsianka z dodatkiem świeżych owoców i orzechów.',
                kcal: 350,
                carbohydrates: 55,
                protein: 10,
                fat: 8,
                preparation: 'Gotuj płatki owsiane w mleku, dodaj pokrojone owoce i orzechy.',
                ingredients: ['Płatki owsiane', 'Mleko', 'Jagody', 'Banan', 'Orzechy', 'Miód'],
                type: MealType.BREAKFAST,
                imageUrl: "https://res.cloudinary.com/dszzihxcj/image/upload/v1722611646/muesli-4212060_1280_cd5ukk.jpg"
            },
            {
                title: 'Jajecznica z Warzywami',
                description: 'Jajecznica z papryką, pomidorami i cebulą.',
                kcal: 300,
                carbohydrates: 15,
                protein: 20,
                fat: 18,
                preparation: 'Smaż jajka z pokrojonymi warzywami na patelni.',
                ingredients: ['Jaja', 'Papryka', 'Pomidory', 'Cebula', 'Oliwa z oliwek'],
                type: MealType.BREAKFAST,
                imageUrl: "https://res.cloudinary.com/dszzihxcj/image/upload/v1722675154/meal2_tzrwej.jpg"
            },
            {
                title: 'Smoothie Bananowo-Szpinakowe',
                description: 'Smoothie z banana i świeżego szpinaku.',
                kcal: 250,
                carbohydrates: 40,
                protein: 5,
                fat: 4,
                preparation: 'Blenduj banana, szpinak i jogurt naturalny.',
                ingredients: ['Banan', 'Szpinak', 'Jogurt naturalny'],
                type: MealType.BREAKFAST,
                imageUrl: "https://res.cloudinary.com/dszzihxcj/image/upload/v1722675165/meal3_kxbkk9.jpg"
            },
            {
                title: 'Tosty z Awokado i Jajkiem',
                description: 'Tosty z pastą z awokado i gotowanym jajkiem.',
                kcal: 320,
                carbohydrates: 30,
                protein: 15,
                fat: 18,
                preparation: 'Posmaruj tosty pastą z awokado i dodaj pokrojone jajko.',
                ingredients: ['Chleb pełnoziarnisty', 'Awokado', 'Jajko', 'Sól', 'Pieprz'],
                type: MealType.BREAKFAST,
                imageUrl: "https://res.cloudinary.com/dszzihxcj/image/upload/v1722675173/meal4_sahoxs.jpg"
            },
            // Drugie Śniadania
            {
                title: 'Jogurt z Musli i Owocami',
                description: 'Jogurt naturalny z musli i świeżymi owocami.',
                kcal: 300,
                carbohydrates: 40,
                protein: 10,
                fat: 8,
                preparation: 'Wymieszaj jogurt z musli i dodaj pokrojone owoce.',
                ingredients: ['Jogurt naturalny', 'Musli', 'Owoce sezonowe'],
                type: MealType.SECOND_BREAKFAST,
                imageUrl: "https://res.cloudinary.com/dszzihxcj/image/upload/v1722675182/meal5_jrqpys.jpg"
            },
            {
                title: 'Kanapki z Chudą Wędliną i Warzywami',
                description: 'Kanapki z chudą wędliną, sałatą i pomidorami.',
                kcal: 280,
                carbohydrates: 35,
                protein: 15,
                fat: 10,
                preparation: 'Złóż wędlinę i warzywa między kromki chleba.',
                ingredients: ['Chleb pełnoziarnisty', 'Wędliny', 'Sałata', 'Pomidory', 'Ogórek'],
                type: MealType.SECOND_BREAKFAST,
                imageUrl: "https://res.cloudinary.com/dszzihxcj/image/upload/v1722675193/meal6_lxm00e.jpg"
            },
            {
                title: 'Sałatka Owocowa z Orzechami',
                description: 'Świeża sałatka owocowa z dodatkiem orzechów.',
                kcal: 250,
                carbohydrates: 35,
                protein: 5,
                fat: 12,
                preparation: 'Pokrój owoce i wymieszaj z orzechami.',
                ingredients: ['Owoce sezonowe', 'Orzechy'],
                type: MealType.SECOND_BREAKFAST,
                imageUrl: "https://res.cloudinary.com/dszzihxcj/image/upload/v1722675200/meal7_xpbvuj.jpg"
            },
            {
                title: 'Chia Pudding z Owocami',
                description: 'Pudding chia z dodatkiem świeżych owoców.',
                kcal: 280,
                carbohydrates: 25,
                protein: 8,
                fat: 14,
                preparation: 'Wymieszaj nasiona chia z mlekiem i odstaw na kilka godzin, następnie dodaj owoce.',
                ingredients: ['Nasiona chia', 'Mleko', 'Owoce'],
                type: MealType.SECOND_BREAKFAST,
                imageUrl: "https://res.cloudinary.com/dszzihxcj/image/upload/v1722675207/meal8_u0pro4.jpg"
            },
            // Obiady
            {
                title: 'Kurczak w Sosie Pomidorowym z Ryżem',
                description: 'Soczysty kurczak w sosie pomidorowym podany z ryżem.',
                kcal: 450,
                carbohydrates: 60,
                protein: 35,
                fat: 12,
                preparation: 'Smaż kurczaka w sosie pomidorowym, podawaj z ugotowanym ryżem.',
                ingredients: ['Kurczak', 'Sos pomidorowy', 'Ryż', 'Przyprawy'],
                type: MealType.LUNCH,
                imageUrl: "https://res.cloudinary.com/dszzihxcj/image/upload/v1722675213/meal9_q59sk5.jpg"
            },
            {
                title: 'Sałatka Cezar z Kurczakiem',
                description: 'Klasyczna sałatka Cezar z grillowanym kurczakiem.',
                kcal: 400,
                carbohydrates: 20,
                protein: 30,
                fat: 22,
                preparation: 'Wymieszaj sałatę, kurczaka, grzanki i sos Cezar.',
                ingredients: ['Sałata', 'Grillowany kurczak', 'Grzanki', 'Sos Cezar'],
                type: MealType.LUNCH,
                imageUrl: "https://res.cloudinary.com/dszzihxcj/image/upload/v1722675221/meal10_l9o6cc.jpg"
            },
            {
                title: 'Spaghetti Bolognese',
                description: 'Makaron spaghetti z klasycznym sosem bolognese.',
                kcal: 500,
                carbohydrates: 70,
                protein: 30,
                fat: 15,
                preparation: 'Gotuj makaron i sos bolognese, wymieszaj przed podaniem.',
                ingredients: ['Makaron spaghetti', 'Mięso mielone', 'Sos pomidorowy', 'Cebula', 'Przyprawy'],
                type: MealType.LUNCH,
                imageUrl: "https://res.cloudinary.com/dszzihxcj/image/upload/v1722675229/meal11_rs81b2.jpg"
            },
            {
                title: 'Kurczak Tandoori z Warzywami',
                description: 'Kurczak marynowany w przyprawach tandoori, pieczony z warzywami.',
                kcal: 450,
                carbohydrates: 25,
                protein: 35,
                fat: 20,
                preparation: 'Marynuj kurczaka w przyprawach tandoori, piecz z warzywami.',
                ingredients: ['Kurczak', 'Przyprawy tandoori', 'Warzywa (np. papryka, cukinia)'],
                type: MealType.LUNCH,
                imageUrl: "https://res.cloudinary.com/dszzihxcj/image/upload/v1722675255/meal12_zxbqzr.jpg"
            },
            {
                title: 'Zupa Brokułowa z Grzankami',
                description: 'Kremowa zupa brokułowa podana z chrupiącymi grzankami.',
                kcal: 350,
                carbohydrates: 35,
                protein: 10,
                fat: 15,
                preparation: 'Gotuj brokuły, zmiksuj na krem, podawaj z grzankami.',
                ingredients: ['Brokuły', 'Cebula', 'Bulion', 'Grzanki'],
                type: MealType.LUNCH,
                imageUrl: "https://res.cloudinary.com/dszzihxcj/image/upload/v1722675263/meal13_tcjwkh.jpg"
            },
            // Kolacje
            {
                title: 'Łosoś z Warzywami',
                description: 'Pieczony łosoś z mieszanką warzyw.',
                kcal: 400,
                carbohydrates: 20,
                protein: 30,
                fat: 20,
                preparation: 'Piecz łosoś z warzywami w piekarniku.',
                ingredients: ['Łosoś', 'Warzywa (np. brokuły, marchewka)', 'Przyprawy'],
                type: MealType.DINNER,
                imageUrl: "https://res.cloudinary.com/dszzihxcj/image/upload/v1722675269/meal14_owdwbv.jpg"
            },
            {
                title: 'Tortilla z Kurczakiem i Warzywami',
                description: 'Tortilla z grillowanym kurczakiem, warzywami i sosem.',
                kcal: 350,
                carbohydrates: 40,
                protein: 20,
                fat: 12,
                preparation: 'Zawijaj grillowanego kurczaka, warzywa i sos w tortilli.',
                ingredients: ['Tortilla', 'Kurczak', 'Warzywa (np. papryka, cebula)', 'Sos jogurtowy'],
                type: MealType.DINNER,
                imageUrl: "https://res.cloudinary.com/dszzihxcj/image/upload/v1722675282/meal15_umg8wn.jpg"
            },
            {
                title: 'Makaron z Warzywami i Serem',
                description: 'Makaron z warzywami i startym serem.',
                kcal: 450,
                carbohydrates: 60,
                protein: 15,
                fat: 18,
                preparation: 'Gotuj makaron, dodaj warzywa i posyp startym serem.',
                ingredients: ['Makaron', 'Warzywa (np. cukinia, pomidory)', 'Ser'],
                type: MealType.DINNER,
                imageUrl: "https://res.cloudinary.com/dszzihxcj/image/upload/v1722675289/meal16_bkd13i.jpg"
            },
            {
                title: 'Sałatka z Tuńczykiem',
                description: 'Sałatka z tuńczykiem, jajkiem i oliwkami.',
                kcal: 350,
                carbohydrates: 15,
                protein: 25,
                fat: 20,
                preparation: 'Wymieszaj składniki sałatki i dopraw.',
                ingredients: ['Tuńczyk', 'Jajka', 'Oliwki', 'Sałata', 'Sos winegret'],
                type: MealType.DINNER,
                imageUrl: "https://res.cloudinary.com/dszzihxcj/image/upload/v1722675295/meal17_fwreq3.jpg"
            },
        ],
    });

    await prisma.post.createMany({
        data: [{
            id: 1,
            title: "Pożywne Śniadanie z Owsianką i Owocami",
            content: "Rozpocznij dzień od pysznego i pożywnego śniadania! Przygotuj owsiankę z płatków owsianych, mleka migdałowego, świeżych jagód, plasterków banana i łyżki miodu. Ta kombinacja dostarczy Ci energii na cały dzień i jest idealna na szybki, zdrowy początek dnia.",
            authorId: 1,
            dataPublikacji: "2024-08-01T00:00:00.000Z",
            imageUrl: "https://res.cloudinary.com/dszzihxcj/image/upload/v1722675302/post1_qds3je.jpg"
        }, {
            id: 2,
            title: "Fit lunch na pracowity dzień",
            content: "Szukasz zdrowego i sycącego lunchu? Wypróbuj sałatkę z grillowanym kurczakiem, świeżym awokado, pomidorami, ogórkiem i mieszanką sałat. Dodaj dressing z oliwy z oliwek, soku z cytryny i przypraw do smaku. Ta sałatka jest pełna białka i zdrowych tłuszczy, które utrzymają Cię pełnym energii przez cały dzień.",
            authorId: 2,
            dataPublikacji: "2024-07-26T00:00:00.000Z",
            imageUrl: "https://res.cloudinary.com/dszzihxcj/image/upload/v1722675309/post2_tnii25.jpg"
        }, {
            id: 3,
            title: "Pyszna kolacja dla całej rodziny",
            content: "Przygotuj zdrową kolację z pieczonym łososiem i sezonowymi warzywami. Wystarczy, że natrzesz filety łososia oliwą z oliwek, czosnkiem, cytryną i ziołami, a następnie upieczesz je razem z brokułami, marchewką i papryką. To danie jest nie tylko smaczne, ale także bogate w kwasy omega-3 i witaminy.",
            authorId: 3,
            dataPublikacji: "2024-07-15T00:00:00.000Z",
            imageUrl: "https://res.cloudinary.com/dszzihxcj/image/upload/v1722675314/post3_hokqos.jpg"
        }, {
            id: 4,
            title: "Zdrowa przekąska na każdą porę dnia",
            content: "Jeśli szukasz zdrowej przekąski, wypróbuj jogurt grecki z dodatkiem orzechów i miodu. Wymieszaj jogurt z garścią posiekanych orzechów włoskich lub migdałów i polej miodem. Ta przekąska jest bogata w białko i zdrowe tłuszcze, a także idealnie zaspokaja głód między posiłkami.",
            authorId: 1,
            dataPublikacji: "2024-06-19T00:00:00.000Z",
            imageUrl: "https://res.cloudinary.com/dszzihxcj/image/upload/v1722675319/post4_fzk437.jpg"
        }, {
            id: 5,
            title: "Pomysł na szybki i zdrowy deser",
            content: "Na szybki i zdrowy deser przygotuj pudding chia. Wymieszaj nasiona chia z mlekiem kokosowym i odstaw do lodówki na kilka godzin, aby nasiona napęczniały. Przed podaniem dodaj świeże kawałki mango i odrobinę mięty. To pyszny i orzeźwiający deser, który dostarczy Ci błonnika i witamin.",
            authorId: 2,
            dataPublikacji: "2024-08-02T00:00:00.000Z",
            imageUrl: "https://res.cloudinary.com/dszzihxcj/image/upload/v1722675327/post5_lupqjw.jpg"
        }]
    })

    console.log('Sample data has been added to the database.');
}
main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async() => {
        await prisma.$disconnect();
    });


// Wywołanie funkcji