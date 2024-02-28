const recetas =[
  {
    name: "Beef Stroganoff",
    ingredients:
      "beef, onion, mushrooms, beef broth, sour cream, flour, butter, salt, pepper",
    dificulty: "Medium",
    meat: "beef",
    category: "dish",
    directions:
      "1. In a large skillet, melt butter over medium heat. Add beef strips and cook until browned. Remove beef from skillet and set aside.\n2. In the same skillet, add onions and mushrooms. Cook until onions are translucent and mushrooms are tender.\n3. Stir in flour until well combined. Gradually add beef broth, stirring constantly.\n4. Return beef to skillet and simmer for 10 minutes, or until beef is cooked through and sauce has thickened.\n5. Remove from heat and stir in sour cream. Season with salt and pepper to taste.\n6. Serve over cooked egg noodles or rice.",
    brief:
      "A classic Russian dish made with tender beef, onions, and mushrooms in a rich sour cream sauce.",
  },
  {
    name: "Chicken Parmesan",
    ingredients:
      "chicken breasts, bread crumbs, Parmesan cheese, eggs, marinara sauce, mozzarella cheese, olive oil, salt, pepper",
    dificulty: "Easy",
    meat: "chicken",
    category: "dish",
    directions:
      "1. Preheat oven to 375°F (190°C). \n2. In a shallow dish, combine bread crumbs, Parmesan cheese, salt, and pepper. In another shallow dish, beat eggs. \n3. Dip chicken breasts into beaten eggs, then coat with bread crumb mixture. \n4. In a large skillet, heat olive oil over medium heat. Add chicken and cook until golden brown on both sides. \n5. Transfer chicken to a baking dish and top with marinara sauce and mozzarella cheese. \n6. Bake for 20-25 minutes, or until chicken is cooked through and cheese is melted and bubbly. \n7. Serve with pasta or a side salad.",
    brief:
      "A delicious Italian-American dish made with breaded chicken, marinara sauce, and melted cheese.",
  },
  {
    name: "Pork Fried Rice",
    ingredients:
      "pork tenderloin, cooked rice, frozen peas and carrots, onion, garlic, soy sauce, sesame oil, eggs, vegetable oil",
    dificulty: "Easy",
    meat: "pork",
    category: "dish",
    directions:
      "1. In a large skillet or wok, heat vegetable oil over medium-high heat. Add pork and cook until browned. Remove pork from skillet and set aside. \n2. In the same skillet, add onion and garlic. Cook until onion is translucent. \n3. Add frozen peas and carrots and cooked rice. Stir well to combine. \n4. Push rice mixture to one side of the skillet and crack eggs into the empty space. Scramble the eggs, then stir to combine with the rice mixture. \n5. Stir in soy sauce and sesame oil. \n6. Return pork to the skillet and cook for an additional 3-4 minutes, or until heated through. \n7. Serve hot.",
    brief:
      "A flavorful Chinese-inspired dish made with tender pork, rice, and mixed vegetables.",
  },
  {
    name: "Fish Tacos",
    ingredients:
      "white fish fillets, flour tortillas, cabbage, lime, mayonnaise, sour cream, garlic powder, cumin, paprika, salt, pepper",
    dificulty: "Easy",
    meat: "fish",
    category: "dish",
    directions:
      "1. In a small bowl, combine mayonnaise, sour cream, garlic powder, cumin, paprika, salt, and pepper. Set aside. \n2. Heat a large skillet over medium-high heat. Add fish fillets and cook until golden brown and cooked through. Remove fish from skillet and set aside. \n3. Warm flour tortillas in the skillet, then remove from heat. \n4. To assemble the tacos, spread a spoonful of the mayonnaise mixture onto each tortilla. Top with cabbage, fish fillets, and a squeeze of lime juice. \n5. Serve with additional lime wedges and hot sauce, if desired.",
    brief:
      "A popular Mexican dish made with crispy fish, tangy cabbage slaw, and a creamy sauce.",
  },
  {
    name: "Vegetable Soup",
    ingredients:
      "vegetable broth, onion, carrots, celery, potatoes, green beans, corn, peas, garlic, bay leaf, thyme, salt, pepper",
    dificulty: "Easy",
    meat: "vegetables",
    category: "soup",
    directions:
      "1. In a large pot, heat olive oil over medium heat. Add onion, carrots, and celery. Cook until vegetables are tender. \n2. Add garlic, bay leaf, and thyme. Cook for an additional minute. \n3. Stir in vegetable broth, potatoes, green beans, corn, and peas. Bring to a boil, then reduce heat and simmer for 20-25 minutes, or until potatoes are cooked through. \n4. Season with salt and pepper to taste. \n5. Remove bay leaf before serving. \n6. Serve hot with crusty bread.",
    brief:
      "A comforting and nutritious soup made with a variety of vegetables and flavorful herbs.",
  },
  {
    name: "Chocolate Chip Cookies",
    ingredients:
      "butter, granulated sugar, brown sugar, eggs, vanilla extract, all-purpose flour, baking soda, salt, chocolate chips",
    dificulty: "Easy",
    meat: "N/A",
    category: "dessert",
    directions:
      "1. Preheat oven to 375°F (190°C). \n2. In a large bowl, cream together butter, granulated sugar, and brown sugar until light and fluffy. \n3. Beat in eggs one at a time, then stir in vanilla extract. \n4. In a separate bowl, whisk together flour, baking soda, and salt. Gradually add dry ingredients to the butter mixture, mixing until just combined. \n5. Stir in chocolate chips. \n6. Drop rounded tablespoons of dough onto ungreased baking sheets. \n7. Bake for 9-11 minutes, or until golden brown around the edges. \n8. Allow cookies to cool on baking sheets for 5 minutes, then transfer to wire racks to cool completely. \n9. Enjoy!",
    brief:
      "A classic American treat made with buttery dough and sweet chocolate chips.",
  },
  {
    name: "Mashed Potatoes",
    ingredients: "potatoes, butter, milk, salt, pepper",
    dificulty: "Easy",
    meat: "N/A",
    category: "side-dish",
    directions:
      "1. Peel and dice potatoes. \n2. Place potatoes in a large pot and cover with cold water. Bring to a boil, then reduce heat and simmer for 15-20 minutes, or until potatoes are fork-tender. \n3. Drain potatoes, then return them to the pot. \n4. Add butter, milk, salt, and pepper to the pot. Mash potatoes with a potato masher or electric mixer until smooth and creamy. \n5. Adjust seasonings to taste. \n6. Serve hot.",
    brief:
      "A classic side dish made with fluffy mashed potatoes, butter, and milk.",
  },
  {
    name: "Caesar Salad",
    ingredients: "romaine lettuce, croutons, Parmesan cheese, Caesar dressing",
    dificulty: "Easy",
    meat: "N/A",
    category: "side-dish",
    directions:
      "1. In a large bowl, combine romaine lettuce, croutons, and Parmesan cheese. \n2. Drizzle with Caesar dressing and toss to coat. \n3. Serve immediately. \n4. Enjoy!",
    brief:
      "A refreshing and tangy salad made with crisp lettuce, crunchy croutons, and a creamy dressing.",
  },
  {
    name: "Tomato Soup",
    ingredients:
      "tomato, onion, garlic, vegetable broth, heavy cream, butter, salt, pepper",
    dificulty: "Easy",
    meat: "N/A",
    category: "soup",
    directions:
      "1. In a large pot, melt butter over medium heat. Add onion and garlic. Cook until onion is translucent. \n2. Add tomatoes and vegetable broth. Bring to a boil, then reduce heat and simmer for 15-20 minutes. \n3. Using an immersion blender, puree the soup until smooth. \n4. Stir in heavy cream and season with salt and pepper to taste. \n5. Simmer for an additional 5 minutes, or until heated through. \n6. Serve hot with a sprinkle of fresh basil or a dollop of sour cream, if desired.",
    brief:
      "A classic and comforting soup made with ripe tomatoes and a touch of cream.",
  },
  {
    name: "Spaghetti Bolognese",
    ingredients:
      "ground beef, onion, garlic, carrot, celery, crushed tomatoes, tomato paste, red wine, beef broth, dried oregano, dried basil, salt, pepper",
    dificulty: "Medium",
    meat: "beef",
    category: "dish",
    directions:
      "1. In a large pot, heat olive oil over medium heat. Add onion, garlic, carrot, and celery. Cook until vegetables are tender. \n2. Add ground beef and cook until browned. \n3. Stir in crushed tomatoes, tomato paste, red wine, beef broth, dried oregano, dried basil, salt, and pepper. \n4. Bring to a boil, then reduce heat and simmer for 1-2 hours, or until sauce has thickened and flavors have melded together. \n5. Serve over cooked spaghetti noodles and sprinkle with Parmesan cheese. \n6. Enjoy!",
    brief:
      "A hearty and flavorful Italian dish made with a rich meat sauce and pasta.",
  },
];

export default recetas
