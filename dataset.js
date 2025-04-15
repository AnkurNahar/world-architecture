 const monuments =  {
  countries: [
    {
      countryName: "United States",
      places: [
        {
          name: "Boston Public Library, McKim Building",
          details: {
            visitors: 2332152,
            type: "library",
            description: "The McKim Building is the main branch of the Boston Public Library at Copley Square in Boston, Massachusetts.",
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
            visitors: 1322195,
            type: "museum",
            description: "The Art Institute of Chicago, founded in 1879, is one of the oldest and largest art museums in the United States.",
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
            visitors: 420000000,
            type: "park",
            description: "Central Park is an urban park between the Upper West Side and Upper East Side neighborhoods of Manhattan in New York City, and the first landscaped park in the United States.",
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
            visitors: 1618774,
            type: "landmark",
            description: "The Gateway Arch is a 630-foot-tall (192 m) monument in St. Louis, Missouri, United States. Clad in stainless steel and built in the form of a weighted catenary arch",
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
            visitors: "Not Available", 
            type: "religious_monument",
            description: "St. Louis Cathedral, is a Catholic cathedral and basilica in New Orleans, Louisiana.",
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
            visitors: 12000,
            type: "library",
            description: "The National Library of Bangladesh is the legal depository of all new books and other printed materials published in Bangladesh",
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
            visitors: "Not Available",
            type: "museum",
            description: "The museum has a collection of Bangladesh's military history, heritage, success stories and various weapons and ammunition.",
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
            visitors: "Not Available",
            type: "park",
            description: "Ramna Park is a significant urban green space renowned for its historical significance and recreational amenities,",
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
            visitors: "Not Available",
            type: "landmark",
            description: "Designed while the country was still part of Pakistan by architect Louis Kahn, the complex is one of the largest legislative complexes in the world",
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
            visitors: "Not Available",
            type: "religious_monument",
            description: "The mosque was designed in a pink concrete in order to soften the harsh industrial surroundings along with reflecting the traditional terracotta tones of Bengal's Mughal architecture.",
            imageDetails: {
              url: "https://uni-blog.s3.amazonaws.com/un/unieditorial/unieditorial2024-03-12T18-31-30-942482.png",
              src: "uni.xyz and Asif Salman, City Syntax",
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
            visitors: 1136050,
            type: "library",
            description: "Nestled within an architecturally striking building, it continues to be a hub for intellectual inquiry.",
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
            visitors: 578000,
            type: "museum",
            description: "The Istanbul Archaeology Museums are a group of three archaeological museums located in the Eminönü quarter of Istanbul,",
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
            visitors: "Not Available",
            type: "park",
            description: "Gülhane Park is a historical urban park in the Fatih district of Istanbul, Turkey;.",
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
            visitors: 3474760,
            type: "landmark",
            description: "Topkapi Palace is a large museum and library in the east of the Fatih district of Istanbul in Turkey..",
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
            visitors: 4000000,
            type: "religious_monument",
            description: "The Blue Mosque, officially the Sultan Ahmed Mosque is an Ottoman-era historical imperial mosque located in Istanbul, Turkey.",
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
            visitors: "Not Available",
            type: "library",
            description: "Biblioteca Nacional do Brasil is the depository of the bibliographic and documentary heritage of Brazil.",
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
            visitors: 215800,
            type: "museum",
            description: "The Museum of Tomorrow (Portuguese: Museu do Amanhã) is a science museum in the city of Rio de Janeiro, Brazil. ",
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
            visitors: 18000000,
            type: "park",
            description: "It is claimed to be the most visited urban park in South America, is listed as one of the best parks in the world, and has been described as a green oasis at the heart of a concrete jungle.",
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
            visitors: 1600000,
            type: "landmark",
            description: "Christ the Redeemer (Portuguese: Cristo Redentor) is an Art Deco statue of Jesus in Rio de Janeiro, Brazil,",
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
            visitors: 1000000,
            type: "religious_monument",
            description: "The Cathedral of Brasília (Portuguese: Catedral Metropolitana de Brasília)is the Roman Catholic cathedral serving Brasília, Brazil, and serves as the seat of the Archdiocese of Brasília.",
            imageDetails: {
              url: "https://upload.wikimedia.org/wikipedia/commons/5/55/Catedral_Metropolitana_de_Bras%C3%ADlia_-_vis%C3%A3o_noturna_01.jpg",
              src: "Wikimedia Commons",
              alt: "image of catedral metropolitana de brasília"
            }
          }
        }
      ]
    }
  ]
}