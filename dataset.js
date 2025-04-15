 const monuments = {
  countries: [
    {
      countryName: "United States",
      places: [
        {
          name: "Boston Public Library, McKim Building",
          details: {
            visitors: 1500000,
            type: "library",
            description: "An architectural gem in the heart of Boston, this library boasts an elegant design that seamlessly blends classical aesthetics with modern functionality. Its historic interiors serve both as a cultural landmark and a vibrant community hub.",
            imageDetails: {
              url: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Boston_Public_Library%2C_McKim_Building_%28Bates_Hall_01%29.jpg",
              src: "Wikimedia Commons",
              alt: "image of boston public library, mckim building"
            }
          }
        },
        {
          name: "The Art Institute of Chicago",
          details: {
            visitors: 6000000,
            type: "museum",
            description: "Located in Chicago, Illinois, this museum is celebrated for its diverse collection spanning centuries and styles. Its striking façade and inviting galleries make it a cornerstone of American art and culture.",
            imageDetails: {
              url: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Art_Institute_of_Chicago%2C_Illinois%2C_Estados_Unidos%2C_2012-10-20%2C_DD_02.jpg",
              src: "Wikimedia Commons",
              alt: "image of the art institute of chicago"
            }
          }
        },
        {
          name: "Central Park",
          details: {
            visitors: 42000000,
            type: "park",
            description: "An iconic oasis in the heart of New York City, Central Park is a masterpiece of landscape architecture. Its meticulously designed pathways, rolling meadows, and water features continue to captivate millions of visitors each year.",
            imageDetails: {
              url: "https://upload.wikimedia.org/wikipedia/commons/9/9f/New_York_City_%28New_York%2C_USA%29%2C_Central_Park_--_2012_--_6731.jpg",
              src: "Wikimedia Commons",
              alt: "image of central park"
            }
          }
        },
        {
          name: "Gateway Arch",
          details: {
            visitors: 2400000,
            type: "landmark",
            description: "Rising majestically over St. Louis, Missouri, the Gateway Arch epitomizes innovation and the spirit of the American frontier. It offers a panoramic view of the city and stands as a tribute to the nation’s westward expansion.",
            imageDetails: {
              url: "https://upload.wikimedia.org/wikipedia/commons/0/03/Gateway_Arch_-_St._Louis_-_Missouri_%2817275578342%29.jpg",
              src: "Wikimedia Commons",
              alt: "image of gateway arch"
            }
          }
        },
        {
          name: "St. Louis Cathedral",
          details: {
            visitors: 700000,
            type: "religious_monument",
            description: "An emblematic religious landmark in New Orleans, Louisiana, St. Louis Cathedral captivates with its enduring beauty and storied history. Its intricate design reflects centuries of cultural and architectural evolution.",
            imageDetails: {
              url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/St._Louis_Cathedral_%28New_Orleans%29.jpg",
              src: "Wikimedia Commons",
              alt: "image of st. louis cathedral"
            }
          }
        }
      ]
    },
    {
      countryName: "Bangladesh",
      places: [
        {
          name: "National Library of Bangladesh",
          details: {
            visitors: 500000,
            type: "library",
            description: "A cornerstone of Bangladesh’s intellectual and cultural life, this library marries modern design with a deep historical ethos. It remains an invaluable resource for scholars and the public alike.",
            imageDetails: {
              url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/National_Library_and_Archives%2C_Bangladesh.jpg",
              src: "Wikimedia Commons",
              alt: "image of national library of bangladesh"
            }
          }
        },
        {
          name: "Bangladesh Military Museum",
          details: {
            visitors: 500000,
            type: "museum",
            description: "Dedicated to showcasing the rich military heritage of Bangladesh, this museum chronicles the evolution of the nation's armed forces through interactive exhibits and archival collections. Housed within an architecturally striking structure, it stands as a tribute to bravery and national identity.",
            imageDetails: {
              url: "https://www.musafir.com.bd/images/places/Bangabandhu-Military-Museum.jpg",
              src: "Musafir (Bangladesh)",
              alt: "image of bangladesh military museum"
            }
          }
        },
        {
          name: "Ramna Park",
          details: {
            visitors: 400000,
            type: "park",
            description: "Offering a peaceful green escape within bustling Dhaka, Ramna Park is a treasured urban retreat. Its tranquil paths and historical ambiance invite reflective strolls and community gatherings.",
            imageDetails: {
              url: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Lake_of_Ramna_Park.jpg",
              src: "Wikimedia Commons",
              alt: "image of ramna park"
            }
          }
        },
        {
          name: "National Parliament Building",
          details: {
            visitors: 200000,
            type: "landmark",
            description: "Designed by Louis Kahn, this National Parliament House is celebrated for its geometric precision and innovative use of space. It stands as both a functional governmental hub and a piece of art in modern architecture.",
            imageDetails: {
              url: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Jatiyo_Sangshad_Bhaban_%2801%29.jpg",
              src: "Wikimedia Commons",
              alt: "image of national parliament building"
            }
          }
        },
        {
          name: "Zebun Nessa Mosque",
          details: {
            visitors: 30000,
            type: "religious_monument",
            description: "Completed in 2023 in Ashulia, Dhaka, the Zebun Nessa Mosque is a modern architectural marvel designed by Studio Morphogenesis under Saiqa Iqbal Meghna. Constructed with pink concrete, the mosque features a monolithic structure with a central dome and four enclosed gardens that enhance natural light and ventilation. Its design integrates sustainable features like recycled water systems and a translucent glass mihrab. Recognized by Time Magazine as one of the World's Greatest Places of 2025, it serves as both a spiritual sanctuary and an architectural landmark.",
            imageDetails: {
              url: "https://www.stirworld.com/images/article_gallery/zebun-nessa-mosque-by-saiqa-iqbal-meghna-zebun-nessa-mosque-saiqa-iqbal-meghna-stirworld-240625044751.jpg",
              src: "STIRworld",
              alt: "image of zebun nessa mosque"
            }
          }
        }
      ]
    },
    {
      countryName: "Turkey",
      places: [
        {
          name: "Istanbul University Library",
          details: {
            visitors: 600000,
            type: "library",
            description: "This historic library is treasured for its vast collection and rich academic tradition. Nestled within an architecturally striking building, it continues to be a hub for intellectual inquiry.",
            imageDetails: {
              url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Istanbul_University_Economics_Library_during_midterm_week_02.jpg",
              src: "Wikimedia Commons",
              alt: "image of istanbul university library"
            }
          }
        },
        {
          name: "Istanbul Archaeology Museums",
          details: {
            visitors: 1200000,
            type: "museum",
            description: "Situated near the ancient Hippodrome, these museums display an impressive collection of antiquities. Their storied galleries transport visitors through millennia of human history and cultural exchange.",
            imageDetails: {
              url: "https://upload.wikimedia.org/wikipedia/commons/7/76/Istanbularcheology.jpg",
              src: "Wikimedia Commons",
              alt: "image of istanbul archaeology museums"
            }
          }
        },
        {
          name: "Gülhane Park",
          details: {
            visitors: 2000000,
            type: "park",
            description: "Once part of the Ottoman Imperial Gardens, Gülhane Park offers a picturesque escape in the midst of Istanbul’s urban bustle. Its historic charm and verdant paths create an inviting retreat.",
            imageDetails: {
              url: "https://upload.wikimedia.org/wikipedia/commons/f/fe/G%C3%BClhane_Park_Istanbul.jpg",
              src: "Wikimedia Commons",
              alt: "image of gülhane park"
            }
          }
        },
        {
          name: "Topkapi Palace",
          details: {
            visitors: 3000000,
            type: "landmark",
            description: "A jewel of Ottoman architecture, Topkapi Palace impresses with its opulent courtyards and intricate design details. It provides a window into the rich legacy of imperial grandeur.",
            imageDetails: {
              url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Istanbul_asv2020-02_img23_Topkap%C4%B1_Palace.jpg",
              src: "Wikimedia Commons",
              alt: "image of topkapi palace"
            }
          }
        },
        {
          name: "Sultan Ahmed Mosque (Blue Mosque)",
          details: {
            visitors: 1500000,
            type: "religious_monument",
            description: "Known for its stunning blue-tiled interior and commanding domes, the Blue Mosque is an enduring symbol of Ottoman craftsmanship. Its serene spirituality and vibrant history continue to captivate visitors.",
            imageDetails: {
              url: "https://upload.wikimedia.org/wikipedia/commons/f/fe/The_Blue_Mosque_at_sunset.jpg",
              src: "Wikimedia Commons",
              alt: "image of sultan ahmed mosque (blue mosque)"
            }
          }
        }
      ]
    },
    {
      countryName: "Brazil",
      places: [
        {
          name: "Biblioteca Nacional do Brasil",
          details: {
            visitors: 500000,
            type: "library",
            description: "One of the country’s most venerable repositories of literature, this national library boasts a collection of rare and culturally significant works. Its modern facilities harmonize with its historic mission.",
            imageDetails: {
              url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Biblioteca_Nacional_do_Brasil_-_Rio_de_Janeiro_-_20190728132151.jpg",
              src: "Wikimedia Commons",
              alt: "image of biblioteca nacional do brasil"
            }
          }
        },
        {
          name: "The Museum of Tomorrow",
          details: {
            visitors: 1000000,
            type: "museum",
            description: "A striking blend of art, science, and innovative design, the Museum of Tomorrow challenges visitors to envision sustainable futures. Its futuristic form is as thought-provoking as its exhibits.",
            imageDetails: {
              url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Museu_do_Amanh%C3%A3_em_sua_inaugura%C3%A7%C3%A3o_01.jpg",
              src: "Wikimedia Commons",
              alt: "image of the museum of tomorrow"
            }
          }
        },
        {
          name: "Ibirapuera Park",
          details: {
            visitors: 8000000,
            type: "park",
            description: "A sprawling green oasis in São Paulo, Ibirapuera Park artfully integrates nature with cultural venues and recreational spaces. It is a vibrant meeting point for relaxation and artistic expression.",
            imageDetails: {
              url: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Ibirapuera_Park_in_S%C3%A3o_Paulo.jpg",
              src: "Wikimedia Commons",
              alt: "image of ibirapuera park"
            }
          }
        },
        {
          name: "Christ the Redeemer",
          details: {
            visitors: 2000000,
            type: "landmark",
            description: "Rising majestically atop Corcovado Mountain, this iconic statue overlooks Rio de Janeiro with a message of peace. Its graceful form and panoramic view define it as a modern marvel.",
            imageDetails: {
              url: "https://upload.wikimedia.org/wikipedia/commons/7/79/Christ_the_Redeemer-%28Corcovado%29_front_view2.jpg",
              src: "Wikimedia Commons",
              alt: "image of christ the redeemer"
            }
          }
        },
        {
          name: "Catedral Metropolitana de Brasília",
          details: {
            visitors: 300000,
            type: "religious_monument",
            description: "Boasting a hyperboloid design that challenges traditional forms, this cathedral is a landmark of modern religious architecture. Its airy interior and striking structure invite quiet contemplation.",
            imageDetails: {
              url: "https://commons.wikimedia.org/wiki/File:Catedral_Metropolitana_de_Bras%C3%ADlia_-_vis%C3%A3o_noturna_01.jpg",
              src: "Wikimedia Commons",
              alt: "image of catedral metropolitana de brasília"
            }
          }
        }
      ]
    }
  ]
}