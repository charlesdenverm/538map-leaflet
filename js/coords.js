const churches = [
  {
    name: "Church of Christ at Cruzada",
    type: "Christian",
    coords: [14.598002596555684, 120.990500051163],
  },
  {
    name: "Holy Face of Jesus",
    type: "Catholic",
    coords: [14.598397140949658, 120.98267443477884],
  },
  {
    name: "Jesus Christ the Lifegiver Church International",
    type: "Christian",
    coords: [14.601758284489332, 120.98698879821421],
  },
  {
    name: "Minor Basilica of St. Lorenzo Ruiz",
    type: "Catholic",
    coords: [14.600060375217266, 120.9745788114241],
  },
  {
    name: "Minor Basilica of The Black Nazarene",
    type: "Catholic",
    coords: [14.59877497362862, 120.9838752454737],
  },
  {
    name: "San Sebastian Church",
    type: "Catholic",
    coords: [14.599714544111709, 120.98905611006523],
  },
  {
    name: "Sta. Cruz Parish Church",
    type: "Catholic",
    coords: [14.599297467754345, 120.98036617291287],
  },
  {
    name: "The Church of Jesus Christ of Latter-day Saints",
    type: "Mormons",
    coords: [14.6042497112848, 120.98828788703766],
  },
  {
    name: "The United Church of Manila",
    type: "Protestant",
    coords: [14.601107461141469, 120.98856525341158],
  },
  {
    name: "The Members of Church of God International",
    type: "Christian",
    coords: [14.597093277057102, 120.98345474932316],
  },
  {
    name: "Ma'had Manila and Islamic Center Mosque",
    type: "Islamic",
    coords: [14.59450337565491, 120.98691635464883],
  },
  {
    name: "Masjid Al-Dahab",
    type: "Islamic",
    coords: [14.595767954718486, 120.98524134417988],
  },
  {
    name: "Iglesia Ni Cristo - Local of Quiapo",
    type: "Christian",
    coords: [14.597954909296167, 120.98849447962682],
  },
  {
    name: "National Shrine of Saint Michael and the Archangels",
    type: "Catholic",
    coords: [14.592286892180779, 120.99163421144696],
  },
  {
    name: "The Minor Basilica and Metropolitan Cathedral of the Immaculate Conception",
    coords: [14.59174980555275, 120.97338967063197],
    type: "Catholic",
  },
  {
    name: "San Vicente de Paul Parish",
    coords: [14.585422272514718, 120.98598269245088],
    type: "Catholic",
  },
];

const laundromats = [
  {
    name: "LYKA Laundry Shop",
    coords: [14.600812358277526, 120.98590952924441],
  },
  {
    name: "Maspressko Laundry Shop",
    coords: [14.60237077738735, 120.97876401477312],
  },
  {
    name: "QuickWash Laundry Binondo",
    coords: [14.599852878878892, 120.97954599701997],
  },
  {
    name: "Jinjie's Laundry Shop",
    coords: [14.59961407694587, 120.98544949538929],
  },
  {
    name: "Neat Nooks Laundry Dry & Clean",
    coords: [14.598743199622808, 120.98458949498982],
  },
  {
    name: "Pamipi Laundry Services",
    coords: [14.596976945963917, 120.98484951193586],
  },
  {
    name: "Thessam Clean Dry Laundry Shop",
    coords: [14.599519414551184, 120.98421911488991],
  },
  {
    name: "Krimm Laundry Shop",
    coords: [14.605024435653908, 120.98582520206513],
  },
  {
    name: "Axel Laundry Shop",
    coords: [14.605089638272432, 120.98748220347531],
  },
  {
    name: "Citycycle Self Service Laundry",
    coords: [14.605122270373615, 120.98126258549654],
  },
];

const convenienceStores = [
  {
    name: "7-Eleven (0773) Raon",
    coords: [14.600742712214082, 120.98479388401556],
  },
  {
    name: "Joymart Convenience Store",
    coords: [14.600782339532401, 120.98694846639908],
  },
  {
    name: "7-Eleven Manila Quezon Blvd Quiapo",
    coords: [14.599158931741165, 120.98400864400264],
  },
  {
    name: "7-Eleven Hidalgo St.",
    coords: [14.59805393376837, 120.98324081587687],
  },
  {
    name: "7 Eleven Bustos (1176)",
    coords: [14.599900111331062, 120.98096571101976],
  },
  {
    name: "Uncle John's Plaza Lacson 1910",
    coords: [14.59896369219908, 120.9806721976274],
  },
  {
    name: "7- Eleven Ongpin 1 ",
    coords: [14.600679773982188, 120.9801046170657],
  },
  {
    name: "See You Daily PH",
    coords: [14.599374452556903, 120.97907924138326],
  },
  {
    name: "Uncle John's Escolta ",
    coords: [14.598521389201638, 120.97918844799543],
  },
  {
    name: "7-Eleven Riverview Mansion ",
    coords: [14.59769902640646, 120.97927933391728],
  },
  {
    name: "7-Eleven Avenida",
    coords: [14.602368259308951, 120.98174114560369],
  },
  {
    name: "7-Eleven Tomas Mapua",
    coords: [14.605137501509558, 120.98066737360168],
  },
  {
    name: "7-Eleven Evangelista St.",
    coords: [14.60235024303336, 120.98348007982979],
  },
  {
    name: "Lawson 135 Avenida",
    coords: [14.605036571185456, 120.9821752000327],
  },
  {
    name: "7-Eleven D. Jose",
    coords: [14.604926747364406, 120.98197734279198],
  },
  {
    name: "Lawson Tolentino st.",
    coords: [14.605443447734269, 120.98956639658478],
  },
  {
    name: "Uncle John R.Hidalgo",
    coords: [14.597929517817608, 120.98424837733158],
  },
];

const pharmacies = [
  {
    name: "Mercury Drug - Isetann Recto",
    coords: [14.602787250104734, 120.9834594333805],
  },
  {
    name: "CWC Drugstore & General Merchandise",
    coords: [14.602514612298608, 120.98035081987605],
  },
  {
    name: "Mercury Drug Store - Sta. Cruz Plaza",
    coords: [14.599999953555374, 120.97999367956163],
  },
  {
    name: "Watsons Pharmacy - SM Quiapo",
    coords: [14.598766694220652, 120.98176351821377],
  },
  {
    name: "Mercury Drugstore - Plaza Miranda",
    coords: [14.597956595924506, 120.98367594696879],
  },
  {
    name: "The Generics Pharmacy - Quezon Blvd.",
    coords: [14.597814811464193, 120.9837711826461],
  },
  {
    name: "MEDPHARM Pharmacy - Globo de Oro",
    coords: [14.59647921516197, 120.98410874163125],
  },
  {
    name: "Generika - Carlos Palanca",
    coords: [14.596854571939923, 120.9827826026544],
  },
  {
    name: "Mercury Drug - One Quiapo Hotel",
    coords: [14.600450218063886, 120.98471922350178],
  },
  {
    name: "Watsons Pharmacy - Isetann Recto",
    coords: [14.602206938456616, 120.98464769242034],
  },
  {
    name: "Mercury Drug - Arranque",
    coords: [14.603882626866223, 120.97992653816505],
  },
];

const coffeeshops = [
  {
    name: "Ambassador Escolta Restaurant Coffee Shop",
    coords: [14.598318987428884, 120.97956686592188],
  },
  {
    name: "Cool-in Coffee Shop",
    coords: [14.598036702944228, 120.9775833011677],
  },
  {
    name: "Café Kabuhayan",
    coords: [14.596296129669756, 120.98280787577465],
  },
  {
    name: "Coffee Project",
    coords: [14.597597676279047, 120.98972639340136],
  },
  {
    name: "The Den",
    coords: [14.598845747785017, 120.97949956175674],
  },
  {
    name: "1919 Grand Cafe",
    coords: [14.596512630915011, 120.97562351162138],
  },
  {
    name: "Sun Café",
    coords: [14.599936001116639, 120.97482860031452],
  },
  {
    name: "Apologue Coffee & Pastry",
    coords: [14.603057897138267, 120.97677618175659],
  },
  {
    name: "Gukeng Coffee Shop",
    coords: [14.603066265628318, 120.97602473341331],
  },
  {
    name: "Caffeine Express",
    coords: [14.599317540372224, 120.99008580395179],
  },
  {
    name: "Hoppers Café",
    coords: [14.604771253117999, 120.98766287074572],
  },
  {
    name: "Calle Cafe by Don Gabriel",
    coords: [14.604758924293636, 120.98795523152178],
  },
  {
    name: "Beyond Coffee Manila",
    coords: [14.605754600586366, 120.98743575435094],
  },
  {
    name: "Midnight Coffee",
    coords: [14.607723318003268, 120.98738316548302],
  },
  {
    name: "Manila Cafe Bistro",
    coords: [14.607946358188219, 120.98817295883474],
  },
  {
    name: "Coffee Studio",
    coords: [14.608287097453317, 120.9938875433079],
  },
  {
    name: "Starbucks - La consolacion",
    coords: [14.597915518813398, 120.99317748281014],
  },
  {
    name: "Starbucks FEU - Nicanor Reyes",
    coords: [14.603572447927641, 120.98768837229201],
  },
  {
    name: "Starbucks Tower Manila",
    coords: [14.607157074169708, 120.98879961629477],
  },
  {
    name: "Starbucks The One Torre De Sto. Tomas",
    coords: [14.607951817350058, 120.99145482501113],
  },
  {
    name: "Starbucks UST Car Park",
    coords: [14.610562174764015, 120.99088471395432],
  },
  {
    name: "Starbucks Pacific Grand Tower",
    coords: [14.6106227529623, 120.98693004654233],
  },
  {
    name: "Starbucks Metropolitan",
    coords: [14.609506487175395, 120.978643770999],
  },
  {
    name: "Starbucks Lucky Chinatown Mall",
    coords: [14.602836273752352, 120.9738340363584],
  },
  {
    name: "Starbucks Pacific Center Bldg.",
    coords: [14.598599858080744, 120.97572311905795],
  },
  {
    name: "Starbucks Noble Place Binondo",
    coords: [14.596900248874906, 120.9754657693508],
  },
  {
    name: "Starbucks Herald Building",
    coords: [14.592986766532007, 120.97771870033274],
  },
];

const malls = [
  {
    name: "SM City Manila",
    coords: [14.590258326950194, 120.98377182673482],
  },
  {
    name: "Manila City Plaza",
    coords: [14.598432133392848, 120.98327954614767],
  },
  {
    name: "Plaza Miranda Shopping Center",
    coords: [14.598887933951405, 120.98271568813415],
  },
  {
    name: "Carriedo Center",
    coords: [14.598915171576184, 120.98254315666449],
  },
  {
    name: "SM Clearance Outlet",
    coords: [14.598640122552968, 120.98190244176807],
  },
  {
    name: "Good Earth Plaza",
    coords: [14.59975607888732, 120.98111338462327],
  },
  {
    name: "Avenida Shopping Center",
    coords: [14.60120627412592, 120.98157568109546],
  },
  {
    name: "Raon Shopping Center",
    coords: [14.600939483449203, 120.98439825561965],
  },
  {
    name: "QQ Mall Quiapo",
    coords: [14.602195738910266, 120.98421381818918],
  },
  {
    name: "Isetann Cinerama Complex",
    coords: [14.60313098151095, 120.98466421426026],
  },
  {
    name: "Odeon Terminal Mall",
    coords: [14.603894013295683, 120.98207970951853],
  },
  {
    name: "Lucky Chinatown Mall",
    coords: [14.603146779118337, 120.973430443119],
  },
  {
    name: "11/88 Shopping Mall",
    coords: [14.604362390267434, 120.97372392236329],
  },
  {
    name: "168 Shopping Mall",
    coords: [14.60515353955417, 120.97213529690376],
  },
  {
    name: "818 Mall",
    coords: [14.602790921974456, 120.96966803305634],
  },
  {
    name: "Dragon8 Shopping Mall",
    coords: [14.606577756110399, 120.97101606056692],
  },
  {
    name: "999 Shopping Mall",
    coords: [14.606151353388851, 120.97363034013772],
  },
  {
    name: "Tutuban Center",
    coords: [14.60700469575914, 120.97323623335208],
  },
  {
    name: "China Plaza Shopping Mall",
    coords: [14.600394384839637, 120.98018757503168],
  },
  {
    name: "New Quiapo Shopping Center",
    coords: [14.600004834573172, 120.98298789205593],
  },
  {
    name: "88 Shopping Center",
    coords: [14.597570136583403, 120.9833842694751],
  },
  {
    name: "GM Shopping Center",
    coords: [14.596304979140271, 120.98328232615238],
  },
  {
    name: "Cartimar Manila Shopping Center",
    coords: [14.602635721333167, 120.98589843804197],
  },
  {
    name: "YUTC Shopping Center",
    coords: [14.604387454739806, 120.97037083824068],
  },
  {
    name: "Ilaya Commercial Shopping Center",
    coords: [14.605467223810376, 120.96972431612905],
  },
];

const schools = [
  {
    name: "Alexan School of Technology",
    coords: [14.60109885307166, 120.98292661672922],
  },
  {
    name: "Arellano University",
    coords: [14.60043333880915, 120.99648513557693],
  },
  {
    name: "Centro Escolar University",
    coords: [14.598894401831188, 120.9917548389261],
  },
  {
    name: "College of the Holy Spirit Manila",
    coords: [14.598044130059469, 120.99460346575778],
  },
  {
    name: "Far Eastern University",
    coords: [14.604123290376794, 120.98862607444484],
  },
  {
    name: "FEATI Univeristy",
    coords: [14.597206555746059, 120.98181339904866],
  },
  {
    name: "Guzman College of Science and and Technology",
    coords: [14.599970188311323, 120.98517069786516],
  },
  {
    name: "Interface Computer College",
    coords: [14.602890093960681, 120.98610537689387],
  },
  {
    name: "Manuel L. Quezon University",
    coords: [14.598039931011815, 120.98348785748253],
  },
  {
    name: "National University",
    coords: [14.60432278285403, 120.99463091081223],
  },
  {
    name: "Phillippine College of Criminology",
    coords: [14.601580153414394, 120.9829842818302],
  },
  {
    name: "Phillipine School of Business Administration",
    coords: [14.60360743755903, 120.98855210214123],
  },
  {
    name: "San Beda College",
    coords: [14.599798023540338, 120.99294322321614],
  },
  {
    name: "San Sebastian College Recoletos",
    coords: [14.600789024308545, 120.98987909699594],
  },
  {
    name: "STI College - Recto",
    coords: [14.602270350573436, 120.98665138751758],
  },
  {
    name: "Technological Institute of the Philippines",
    coords: [14.595323239519711, 120.98796778907264],
  },
  {
    name: "The National Teachers University",
    coords: [14.598083090822328, 120.98923721977009],
  },
  {
    name: "The Univeristy of Manila",
    coords: [14.601830019385522, 120.99150292448351],
  },
  {
    name: "Universidad De Manila",
    coords: [14.591606079491054, 120.98155084672786],
  },
  {
    name: "University of the East",
    coords: [14.602213698955216, 120.98973060395902],
  },
  {
    name: "Univeristy of Santo Tomas",
    coords: [14.609854756550938, 120.98948958203695],
  },
  {
    name: "Colegio De Santa Rosa Intramuros",
    coords: [14.592805752579178, 120.97488668386347],
  },
  {
    name: "ABE International Business College Main Campus",
    coords: [14.600464588095791, 120.99608156095705],
  },
  {
    name: "Lyceum of the Philippines",
    coords: [14.59158896276589, 120.9777730882711],
  },
  {
    name: "Mapúa University",
    coords: [14.590501777537167, 120.97795022792789],
  },
  {
    name: "Philippnine Normal University - Manila",
    coords: [14.587103347526961, 120.98281704116825],
  },
  {
    name: "Technological University of the Philippines",
    coords: [14.587090432786004, 120.98448872177161],
  },
];

const restaurants = [
  {
    name: "Ambos Mundos",
    coords: [14.603354593077828, 120.98105107268744],
  },
  {
    name: "Amis Restaurant",
    coords: [14.598721294068909, 120.98274141426462],
  },
  {
    name: "Delicious Restaurant",
    coords: [14.601047243337153, 120.98039314077029],
  },
  {
    name: "Globe Lumpia House",
    coords: [14.600588139523941, 120.98410838542495],
  },
  {
    name: "Hongkong Nooodle and Dimsum",
    coords: [14.599336775716248, 120.98411025662955],
  },
  {
    name: "Ramon Lee's Panciteria",
    coords: [14.600316474889011, 120.98091122294227],
  },
  {
    name: "Santorini",
    coords: [14.60765567452215, 120.98841854234023],
  },
  {
    name: "Old Street Beef Noodles",
    coords: [14.603355331845226, 120.98175686619699],
  },
  {
    name: "Jolli Dada's Eatery Palabok & Halo Halo",
    coords: [14.596267197682025, 120.98289087613271],
  },
  {
    name: "Davids Teahouse - Hotpot",
    coords: [14.600789434035626, 120.97911237054373],
  },
  {
    name: "Ongpin Mañosa Restaurant Co.",
    coords: [14.60130176629688, 120.9787633117237],
  },
  {
    name: "Ling Nam Noodle Factory",
    coords: [14.60218112467247, 120.97867284245797],
  },
  {
    name: "Shanghai Fried Siopao",
    coords: [14.60162639843049, 120.97783197202828],
  },
  {
    name: "Lai Lai Seafood Restaurant",
    coords: [14.602051700091344, 120.97759685433383],
  },
  {
    name: "San Guo La Mien",
    coords: [14.603517406675907, 120.97354449232957],
  },
  {
    name: "Jollibee Don Eusebio",
    coords: [14.599009940377195, 120.98230171198878],
  },
  {
    name: "Jollibee Manila City Plaza",
    coords: [14.598432133392848, 120.98327954614767],
  },
  {
    name: "McDonald's Good Earth",
    coords: [14.599713362019429, 120.98132373948532],
  },
  {
    name: "HAI PIO Pares & BBQ",
    coords: [14.598785743945252, 120.98201562723118],
  },
  {
    name: "McDonald's Nepo Mart",
    coords: [14.602935972241228, 120.98400993887746],
  },
  {
    name: "McDonald's Recto Rizal Ave",
    coords: [14.603618310996495, 120.98174174920584],
  },
  {
    name: "McDonald's Sta. Cruz",
    coords: [14.599822345599241, 120.97981362150874],
  },
  {
    name: "Arab Asian",
    coords: [14.596478096288532, 120.9849159387934],
  },
  {
    name: "Hap Chan - Tomas Mapua",
    coords: [14.601321902247603, 120.97974668475744],
  },
  {
    name: "KFC Carriedo",
    coords: [-14.59883852587662, 120.98313510852306],
  },
  {
    name: "Chowking Paterno",
    coords: [14.599465407864285, 120.98401823693479],
  },
  {
    name: "Chowking Quiapo",
    coords: [14.59874190399583, 120.98264183299958],
  },
  {
    name: "Mang Inasal - Isetann Recto",
    coords: [14.603127822811702, 120.98392626457179],
  },
  {
    name: "Mang Inasal - Universal Park",
    coords: [14.601419680615491, 120.98155255755343],
  },
  {
    name: "Mang Inasal - Gonzalo Puyat",
    coords: [14.600495436537472, 120.98359595243781],
  },
];

const attractions = [
  {
    name: "Carriedo Fountain",
    coords: [14.599895138413796, 120.980317203486],
    description:
      "The Carriedo Fountain in Quiapo is a historic landmark built to honor Don Francisco Carriedo",
    image: "carriedo_fountain.png",
    iconUrl: "fountain.svg",
  },
  {
    name: "Wellmanson Beads & Accessories",
    coords: [14.597433811853081, 120.98311874314702],
    description:
      "A national park dedicated to the country's national hero, José Rizal.",
    image: "wellmanson.png",
    iconUrl: "giftshop.svg",
  },
  {
    name: "Fort Santiago",
    coords: [14.594236157358875, 120.97042172824308],
    description: "A historic Spanish fortress located in Intramuros, Manila.",
    image: "fort_santiago.jpg",
    iconUrl: "baluarte.svg",
  },
  {
    name: "Jones Bridge",
    coords: [14.595807524619854, 120.97722419240259],
    description:
      "A historic bridge in Manila that connects the districts of Binondo and Intramuros.",
    image: "jones_bridge.jpg",
    iconUrl: "bridge.svg",
  },
  {
    name: "Binondo Chinatown Arch",
    coords: [14.59715240220981, 120.97631047462443],
    description:
      "The oldest Chinatown in the world, known for its rich history and vibrant culture.",
    image: "binondo_arch.jpg",
    iconUrl: "arch.svg",
  },
  {
    name: "Rizal Monument",
    coords: [14.581815764676765, 120.97692187488477],
    description:
      "A national park dedicated to the country's national hero, José Rizal.",
    image: "rizal_monument.jpg",
    iconUrl: "monument.svg",
  },
  {
    name: "Doña Teodora Alonzo Monument",
    coords: [14.598897238411057, 120.97237944879532],
    description:
      "A monument dedicated to Doña Teodora Alonzo, the mother of José Rizal.",
    image: "tahanan_ng_kaanak_ni_rizal.jpg",
    iconUrl: "tombstone.svg",
  },
  {
    name: "Arroceros Forest Park",
    coords: [14.59423912660099, 120.98171942845696],
    description:
      "A small urban forest park in Manila, providing a green space in the city.",
    image: "arroceros.jpg",
    iconUrl: "park.svg",
  },
  {
    name: "Liwasang Bonificacio",
    coords: [14.594576932403891, 120.97936886621562],
    description:
      "A public square in Manila named after Andres Bonifacio, a national hero.",
    image: "liwasang_bonifacio.jpg",
    iconUrl: "liwasan.svg",
  },
  {
    name: "The Metropolitan Theater",
    coords: [14.593955248019805, 120.98051870359816],
    description:
      "A historic theater in Manila known for its Art Deco architecture.",
    image: "metropolitan_theater.png",
    iconUrl: "theater.svg",
  },
  {
    name: "El Hogar Filipino Building",
    coords: [14.596182046454686, 120.97570957315645],
    description:
      "A historic building in Manila known for its unique architecture.",
    image: "el_hogar.jpg",
    iconUrl: "building.svg",
  },
  {
    name: "Plaza Calderón de la Barca (S. Lorenzo Ruiz)",
    coords: [14.600386760129258, 120.9737704352712],
    description:
      "A public square in Quiapo named after the Spanish playwright Pedro Antonio de Alarcón.",
    image: "plaza_san_lorenzo.jpg",
    iconUrl: "plaza.svg",
  },
  {
    name: "Teus & Goldenberg Mansions",
    coords: [14.591789070389718, 120.98929721376277],
    description:
      "A historic mansion in Quiapo known for its architectural significance.",
    image: "teus&goldenberg.png",
    iconUrl: "mansion.svg",
  },
  {
    name: "Bahay Ugnayan",
    coords: [14.59286130141525, 120.99210038029945],
    description:
      "A cultural center in Quiapo that promotes Filipino heritage and arts.",
    image: "bahay_ugnayan.jpg",
    iconUrl: "bahay.svg",
  },
  {
    name: "Malacañang Palace",
    coords: [14.593924493738141, 120.99450430202418],
    description:
      "The official residence and principal workplace of the President of the Philippines.",
    image: "malacanang.png",
    iconUrl: "palace.svg",
  },
  {
    name: "Hospicio de San Jose",
    coords: [14.590715469093837, 120.98791719253742],
    description:
      "A historic orphanage and care facility in Manila, providing shelter and support to children.",
    image: "hospicio_de_san_jose.jpeg",
    iconUrl: "orphanage.svg",
  },
  {
    name: "Bahay Nakpil-Bautista",
    coords: [14.598401248975293, 120.98477549272006],
    description:
      "A historic house museum in Quiapo that showcases the life and contributions of Filipino heroes.",
    image: "bahay_nakpil.jpg",
    iconUrl: "bahay2.svg",
  },
  {
    name: "Quinta Market",
    coords: [14.59632200331403, 120.98249064052318],
    description:
      "A bustling market in Quiapo known for its fresh produce, local goods, and vibrant atmosphere.",
    image: "quinta_market.jpg",
    iconUrl: "market.svg",
  },
  {
    name: "Ongpin Tower",
    coords: [14.600863851814118, 120.98008048980395],
    description:
      "A prominent commercial building in Binondo, known for its shopping and dining options.",
    image: "ongpin_tower.png",
    iconUrl: "tower.svg",
  },
];
