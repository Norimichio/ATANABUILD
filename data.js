const cpuDatabase = {
  intel: {
    // LGA1150 (10 builds)
    lga1150: [
      {
        name: "Intel Core i7-4790K",
        generation: "Devil's Canyon",
        price: "$200",
        compatibleParts: {
          motherboard: { name: "ASUS Z97-A", price: "$120" },
          ram: { name: "16GB DDR3-1600", price: "$80" },
          cooler: { name: "Cooler Master Hyper 212 EVO", price: "$40" },
          gpu: { name: "NVIDIA GTX 980 Ti", price: "$300" },
          storage: { name: "Samsung 850 EVO 500GB", price: "$150" },
          psu: { name: "EVGA SuperNOVA 650W", price: "$90" },
          case: { name: "NZXT H440", price: "$120" }
        }
      },
      {
        name: "Intel Xeon E3-1231v3",
        generation: "Haswell",
        price: "$150",
        compatibleParts: {
          motherboard: { name: "ASRock H97 Pro4", price: "$100" },
          ram: { name: "16GB DDR3-1600 ECC", price: "$90" },
          cooler: { name: "Intel Stock Cooler", price: "$0" },
          gpu: { name: "AMD RX 580 8GB", price: "$200" },
          storage: { name: "Crucial MX500 1TB", price: "$110" },
          psu: { name: "Corsair CX550M", price: "$70" },
          case: { name: "Fractal Design Define R4", price: "$100" }
        }
      },
      {
        name: "Intel Core i5-4690K",
        generation: "Haswell",
        price: "$120",
        compatibleParts: {
          motherboard: { name: "MSI Z97 Gaming 5", price: "$130" },
          ram: { name: "8GB DDR3-1866", price: "$50" },
          cooler: { name: "be quiet! Pure Rock Slim", price: "$30" },
          gpu: { name: "NVIDIA GTX 970", price: "$180" },
          storage: { name: "WD Blue 1TB HDD + 250GB SSD", price: "$100" },
          psu: { name: "SeaSonic S12II 520W", price: "$60" },
          case: { name: "Cooler Master HAF 912", price: "$60" }
        }
      },
      {
        name: "Intel Core i7-5775C",
        generation: "Broadwell",
        price: "$250",
        compatibleParts: {
          motherboard: { name: "Gigabyte Z97X-UD5H", price: "$150" },
          ram: { name: "16GB DDR3-1600", price: "$80" },
          cooler: { name: "Noctua NH-L9i", price: "$50" },
          gpu: { name: "NVIDIA GTX 1060 6GB", price: "$220" },
          storage: { name: "Samsung 860 EVO 1TB", price: "$130" },
          psu: { name: "EVGA 600B", price: "$60" },
          case: { name: "Silverstone SG13", price: "$50" }
        }
      },
      {
        name: "Intel Pentium G3258",
        generation: "Haswell",
        price: "$70",
        compatibleParts: {
          motherboard: { name: "ASUS H81M-K", price: "$60" },
          ram: { name: "8GB DDR3-1333", price: "$40" },
          cooler: { name: "Stock Intel Cooler", price: "$0" },
          gpu: { name: "NVIDIA GTX 750 Ti", price: "$100" },
          storage: { name: "Seagate Barracuda 500GB", price: "$40" },
          psu: { name: "Thermaltake Smart 430W", price: "$40" },
          case: { name: "Cooler Master Elite 343", price: "$40" }
        }
      },
      {
        name: "Intel Core i5-4590",
        generation: "Haswell",
        price: "$100",
        compatibleParts: {
          motherboard: { name: "Gigabyte GA-H97-D3H", price: "$90" },
          ram: { name: "8GB DDR3-1600", price: "$50" },
          cooler: { name: "Arctic Freezer 7 Pro", price: "$25" },
          gpu: { name: "AMD R9 380", price: "$150" },
          storage: { name: "Kingston A400 240GB", price: "$35" },
          psu: { name: "Corsair VS450", price: "$40" },
          case: { name: "Antec GX500", price: "$50" }
        }
      },
      {
        name: "Intel Xeon E3-1271v3",
        generation: "Haswell",
        price: "$180",
        compatibleParts: {
          motherboard: { name: "ASUS H97-PRO", price: "$110" },
          ram: { name: "16GB DDR3-1600 ECC", price: "$90" },
          cooler: { name: "Cooler Master Hyper T4", price: "$25" },
          gpu: { name: "NVIDIA GTX 960", price: "$130" },
          storage: { name: "WD Blue 500GB HDD", price: "$35" },
          psu: { name: "EVGA 500B", price: "$50" },
          case: { name: "Fractal Design Core 2300", price: "$50" }
        }
      },
      {
        name: "Intel Core i3-4170",
        generation: "Haswell",
        price: "$80",
        compatibleParts: {
          motherboard: { name: "ASRock B85M Pro4", price: "$70" },
          ram: { name: "8GB DDR3-1600", price: "$40" },
          cooler: { name: "Stock Intel Cooler", price: "$0" },
          gpu: { name: "NVIDIA GT 1030", price: "$90" },
          storage: { name: "Seagate 1TB HDD", price: "$45" },
          psu: { name: "Thermaltake TR2 500W", price: "$45" },
          case: { name: "Cooler Master N200", price: "$50" }
        }
      },
      {
        name: "Intel Core i7-4770K",
        generation: "Haswell",
        price: "$180",
        compatibleParts: {
          motherboard: { name: "ASUS Maximus VI Hero", price: "$150" },
          ram: { name: "16GB DDR3-1866", price: "$80" },
          cooler: { name: "Noctua NH-D14", price: "$80" },
          gpu: { name: "NVIDIA GTX 780 Ti", price: "$200" },
          storage: { name: "Samsung 840 Pro 256GB", price: "$100" },
          psu: { name: "Corsair HX750", price: "$120" },
          case: { name: "Corsair 500R", price: "$100" }
        }
      },
      {
        name: "Intel Core i5-4460",
        generation: "Haswell",
        price: "$90",
        compatibleParts: {
          motherboard: { name: "MSI H81M-E33", price: "$60" },
          ram: { name: "8GB DDR3-1600", price: "$40" },
          cooler: { name: "Stock Intel Cooler", price: "$0" },
          gpu: { name: "AMD RX 560", price: "$120" },
          storage: { name: "Crucial BX500 480GB", price: "$50" },
          psu: { name: "EVGA 430W", price: "$40" },
          case: { name: "Thermaltake Versa H15", price: "$45" }
        }
      }
    ],

    // LGA1151 (10 builds)
    lga1151: [
      {
        name: "Intel Core i7-6700K",
        generation: "Skylake",
        price: "$250",
        compatibleParts: {
          motherboard: { name: "ASUS Z170-A", price: "$150" },
          ram: { name: "16GB DDR4-2400", price: "$90" },
          cooler: { name: "Corsair H100i v2", price: "$110" },
          gpu: { name: "NVIDIA GTX 1070", price: "$350" },
          storage: { name: "Samsung 950 PRO 256GB", price: "$200" },
          psu: { name: "EVGA 750 G2", price: "$120" },
          case: { name: "Phanteks Enthoo Pro M", price: "$80" }
        }
      },
      {
        name: "Intel Core i5-7600K",
        generation: "Kaby Lake",
        price: "$220",
        compatibleParts: {
          motherboard: { name: "MSI Z270 Gaming M5", price: "$160" },
          ram: { name: "16GB DDR4-2666", price: "$100" },
          cooler: { name: "CRYORIG H7", price: "$35" },
          gpu: { name: "AMD RX 480 8GB", price: "$250" },
          storage: { name: "Intel 600p 512GB", price: "$150" },
          psu: { name: "Corsair RM650x", price: "$100" },
          case: { name: "NZXT S340", price: "$70" }
        }
      },
      {
        name: "Intel Core i3-6100",
        generation: "Skylake",
        price: "$110",
        compatibleParts: {
          motherboard: { name: "Gigabyte GA-H110M-A", price: "$60" },
          ram: { name: "8GB DDR4-2133", price: "$50" },
          cooler: { name: "Stock Intel Cooler", price: "$0" },
          gpu: { name: "NVIDIA GTX 1050 Ti", price: "$150" },
          storage: { name: "WD Blue 1TB HDD", price: "$45" },
          psu: { name: "EVGA 500W", price: "$45" },
          case: { name: "Cooler Master Elite 110", price: "$40" }
        }
      },
      {
        name: "Intel Core i7-7700K",
        generation: "Kaby Lake",
        price: "$300",
        compatibleParts: {
          motherboard: { name: "ASUS ROG Maximus IX Hero", price: "$250" },
          ram: { name: "16GB DDR4-3000", price: "$110" },
          cooler: { name: "NZXT Kraken X52", price: "$130" },
          gpu: { name: "NVIDIA GTX 1080 Ti", price: "$700" },
          storage: { name: "Samsung 960 EVO 500GB", price: "$250" },
          psu: { name: "EVGA SuperNOVA 850 G3", price: "$150" },
          case: { name: "Corsair Crystal 570X", price: "$170" }
        }
      },
      {
        name: "Intel Core i5-8400",
        generation: "Coffee Lake",
        price: "$180",
        compatibleParts: {
          motherboard: { name: "ASRock B360 Pro4", price: "$90" },
          ram: { name: "16GB DDR4-2666", price: "$100" },
          cooler: { name: "Cooler Master Hyper 212 LED", price: "$35" },
          gpu: { name: "NVIDIA GTX 1060 6GB", price: "$250" },
          storage: { name: "Crucial MX300 525GB", price: "$120" },
          psu: { name: "SeaSonic FOCUS 550W", price: "$80" },
          case: { name: "NZXT H500", price: "$70" }
        }
      },
      {
        name: "Intel Core i9-9900K",
        generation: "Coffee Lake",
        price: "$400",
        compatibleParts: {
          motherboard: { name: "Gigabyte Z390 AORUS Master", price: "$260" },
          ram: { name: "32GB DDR4-3200", price: "$150" },
          cooler: { name: "NZXT Kraken X62", price: "$150" },
          gpu: { name: "NVIDIA RTX 2080", price: "$700" },
          storage: { name: "Samsung 970 EVO Plus 1TB", price: "$200" },
          psu: { name: "SeaSonic FOCUS Plus 850W", price: "$130" },
          case: { name: "Lian Li PC-O11 Dynamic", price: "$140" }
        }
      },
      {
        name: "Intel Core i5-9400F",
        generation: "Coffee Lake",
        price: "$150",
        compatibleParts: {
          motherboard: { name: "ASRock B365 Phantom Gaming 4", price: "$100" },
          ram: { name: "16GB DDR4-2666", price: "$80" },
          cooler: { name: "Cooler Master Hyper 212 Black", price: "$40" },
          gpu: { name: "NVIDIA GTX 1660 Super", price: "$230" },
          storage: { name: "Crucial P1 500GB", price: "$70" },
          psu: { name: "EVGA 600 GD", price: "$70" },
          case: { name: "Cooler Master NR600", price: "$80" }
        }
      },
      {
        name: "Intel Core i7-8700K",
        generation: "Coffee Lake",
        price: "$300",
        compatibleParts: {
          motherboard: { name: "ASUS ROG Strix Z370-E", price: "$200" },
          ram: { name: "16GB DDR4-3200", price: "$110" },
          cooler: { name: "be quiet! Dark Rock Pro 3", price: "$90" },
          gpu: { name: "NVIDIA GTX 1080", price: "$400" },
          storage: { name: "WD Black SN750 500GB", price: "$80" },
          psu: { name: "Corsair RM650x", price: "$100" },
          case: { name: "Fractal Design Define C", price: "$80" }
        }
      },
      {
        name: "Intel Core i3-8100",
        generation: "Coffee Lake",
        price: "$120",
        compatibleParts: {
          motherboard: { name: "MSI B360M Mortar", price: "$80" },
          ram: { name: "8GB DDR4-2400", price: "$50" },
          cooler: { name: "Stock Intel Cooler", price: "$0" },
          gpu: { name: "AMD RX 570", price: "$170" },
          storage: { name: "Kingston A400 240GB", price: "$35" },
          psu: { name: "EVGA 450 BR", price: "$45" },
          case: { name: "Thermaltake Versa H18", price: "$50" }
        }
      },
      {
        name: "Intel Core i5-9600K",
        generation: "Coffee Lake",
        price: "$200",
        compatibleParts: {
          motherboard: { name: "ASUS PRIME Z390-A", price: "$150" },
          ram: { name: "16GB DDR4-3200", price: "$100" },
          cooler: { name: "CRYORIG H5 Universal", price: "$50" },
          gpu: { name: "NVIDIA RTX 2060", price: "$300" },
          storage: { name: "Intel 660p 1TB", price: "$100" },
          psu: { name: "Corsair CX650M", price: "$80" },
          case: { name: "Phanteks Eclipse P350X", price: "$70" }
        }
      }
    ],

    // LGA1200 (10 builds)
    lga1200: [
      {
        name: "Intel Core i7-10700K",
        generation: "Comet Lake",
        price: "$300",
        compatibleParts: {
          motherboard: { name: "MSI Z490 Gaming Edge WiFi", price: "$190" },
          ram: { name: "32GB DDR4-3200", price: "$130" },
          cooler: { name: "be quiet! Dark Rock Pro 4", price: "$90" },
          gpu: { name: "NVIDIA RTX 3070", price: "$500" },
          storage: { name: "WD Black SN750 1TB", price: "$130" },
          psu: { name: "Corsair RM750", price: "$120" },
          case: { name: "Fractal Design Meshify C", price: "$90" }
        }
      },
      {
        name: "Intel Core i9-11900K",
        generation: "Rocket Lake",
        price: "$400",
        compatibleParts: {
          motherboard: { name: "ASUS ROG Maximus XIII Hero", price: "$450" },
          ram: { name: "32GB DDR4-3600", price: "$150" },
          cooler: { name: "ARCTIC Liquid Freezer II 280", price: "$110" },
          gpu: { name: "NVIDIA RTX 3080", price: "$700" },
          storage: { name: "Samsung 980 PRO 1TB", price: "$150" },
          psu: { name: "EVGA SuperNOVA 1000 G5", price: "$180" },
          case: { name: "Lian Li Lancool II Mesh", price: "$100" }
        }
      },
      {
        name: "Intel Core i5-10400F",
        generation: "Comet Lake",
        price: "$150",
        compatibleParts: {
          motherboard: { name: "ASRock B460 Steel Legend", price: "$100" },
          ram: { name: "16GB DDR4-2666", price: "$80" },
          cooler: { name: "Cooler Master Hyper 212 RGB", price: "$40" },
          gpu: { name: "NVIDIA GTX 1660 Ti", price: "$250" },
          storage: { name: "Crucial P2 500GB", price: "$60" },
          psu: { name: "EVGA 600 BQ", price: "$60" },
          case: { name: "Cooler Master MasterBox MB511", price: "$70" }
        }
      },
      {
        name: "Intel Core i3-10100",
        generation: "Comet Lake",
        price: "$120",
        compatibleParts: {
          motherboard: { name: "MSI B460M PRO-VDH", price: "$80" },
          ram: { name: "16GB DDR4-2666", price: "$70" },
          cooler: { name: "Stock Intel Cooler", price: "$0" },
          gpu: { name: "NVIDIA GTX 1650 Super", price: "$160" },
          storage: { name: "WD Blue SN550 500GB", price: "$60" },
          psu: { name: "Corsair CV450", price: "$45" },
          case: { name: "Thermaltake Versa H17", price: "$45" }
        }
      },
      {
        name: "Intel Core i7-11700K",
        generation: "Rocket Lake",
        price: "$350",
        compatibleParts: {
          motherboard: { name: "Gigabyte Z590 AORUS ELITE", price: "$200" },
          ram: { name: "32GB DDR4-3200", price: "$140" },
          cooler: { name: "NZXT Kraken X53", price: "$130" },
          gpu: { name: "AMD RX 6800 XT", price: "$650" },
          storage: { name: "Samsung 970 EVO Plus 1TB", price: "$120" },
          psu: { name: "SeaSonic FOCUS GX-850", price: "$130" },
          case: { name: "Corsair 4000D Airflow", price: "$95" }
        }
      },
      {
        name: "Intel Core i5-11400F",
        generation: "Rocket Lake",
        price: "$180",
        compatibleParts: {
          motherboard: { name: "ASUS TUF Gaming B560-PLUS", price: "$140" },
          ram: { name: "16GB DDR4-3200", price: "$80" },
          cooler: { name: "DeepCool GAMMAXX 400", price: "$25" },
          gpu: { name: "NVIDIA RTX 3060", price: "$330" },
          storage: { name: "Kingston KC2500 1TB", price: "$100" },
          psu: { name: "EVGA 650 GA", price: "$80" },
          case: { name: "Phanteks Eclipse P360A", price: "$70" }
        }
      },
      {
        name: "Intel Core i9-10900K",
        generation: "Comet Lake",
        price: "$400",
        compatibleParts: {
          motherboard: { name: "ASUS ROG Maximus XII Hero", price: "$400" },
          ram: { name: "64GB DDR4-3200", price: "$250" },
          cooler: { name: "Corsair iCUE H150i RGB PRO XT", price: "$170" },
          gpu: { name: "NVIDIA RTX 3090", price: "$1500" },
          storage: { name: "Sabrent Rocket 4.0 2TB", price: "$250" },
          psu: { name: "EVGA SuperNOVA 1200 P2", price: "$250" },
          case: { name: "Lian Li PC-O11 Dynamic XL", price: "$200" }
        }
      },
      {
        name: "Intel Core i5-10600K",
        generation: "Comet Lake",
        price: "$200",
        compatibleParts: {
          motherboard: { name: "MSI MPG Z490 Gaming Plus", price: "$160" },
          ram: { name: "32GB DDR4-3200", price: "$130" },
          cooler: { name: "Noctua NH-U12S", price: "$60" },
          gpu: { name: "AMD RX 5700 XT", price: "$400" },
          storage: { name: "Crucial P5 1TB", price: "$120" },
          psu: { name: "Corsair RM750x", price: "$120" },
          case: { name: "NZXT H510", price: "$70" }
        }
      },
      {
        name: "Intel Core i3-10320",
        generation: "Comet Lake",
        price: "$130",
        compatibleParts: {
          motherboard: { name: "Gigabyte H410M S2H", price: "$70" },
          ram: { name: "16GB DDR4-2666", price: "$70" },
          cooler: { name: "Cooler Master Hyper 212 Black", price: "$40" },
          gpu: { name: "NVIDIA GTX 1650", price: "$150" },
          storage: { name: "WD Blue 1TB HDD", price: "$45" },
          psu: { name: "Thermaltake Smart 500W", price: "$50" },
          case: { name: "Cooler Master MasterBox Q300L", price: "$50" }
        }
      },
      {
        name: "Intel Core i7-10700F",
        generation: "Comet Lake",
        price: "$250",
        compatibleParts: {
          motherboard: { name: "ASUS PRIME B460-PLUS", price: "$120" },
          ram: { name: "32GB DDR4-2933", price: "$140" },
          cooler: { name: "be quiet! Pure Rock 2", price: "$45" },
          gpu: { name: "NVIDIA RTX 3060 Ti", price: "$400" },
          storage: { name: "Seagate FireCuda 510 1TB", price: "$120" },
          psu: { name: "EVGA 700 GD", price: "$80" },
          case: { name: "Fractal Design Define 7 Compact", price: "$80" }
        }
      }
    ],

    // LGA1700 (17 builds)
    lga1700: [
      {
        name: "Intel Core i5-12600K",
        generation: "Alder Lake",
        price: "$240",
        compatibleParts: {
          motherboard: { name: "MSI PRO Z690-A", price: "$200" },
          ram: { name: "32GB DDR4-3600", price: "$120" },
          cooler: { name: "DeepCool AK620", price: "$65" },
          gpu: { name: "NVIDIA RTX 3060 Ti", price: "$400" },
          storage: { name: "Crucial P5 Plus 1TB", price: "$130" },
          psu: { name: "Corsair RM850x", price: "$150" },
          case: { name: "Corsair 4000D Airflow", price: "$95" }
        }
      },
      {
        name: "Intel Core i9-13900K",
        generation: "Raptor Lake",
        price: "$550",
        compatibleParts: {
          motherboard: { name: "ASUS ROG Maximus Z790 Hero", price: "$500" },
          ram: { name: "64GB DDR5-6000", price: "$250" },
          cooler: { name: "Corsair iCUE H150i Elite", price: "$200" },
          gpu: { name: "NVIDIA RTX 4090", price: "$1600" },
          storage: { name: "WD Black SN850X 2TB", price: "$200" },
          psu: { name: "Seasonic PRIME TX-1000W", price: "$250" },
          case: { name: "Fractal Design Torrent", price: "$170" }
        }
      },
      {
        name: "Intel Core i7-12700K",
        generation: "Alder Lake",
        price: "$350",
        compatibleParts: {
          motherboard: { name: "Gigabyte Z690 AORUS Elite", price: "$250" },
          ram: { name: "32GB DDR5-5200", price: "$180" },
          cooler: { name: "Noctua NH-D15", price: "$110" },
          gpu: { name: "NVIDIA RTX 3080", price: "$700" },
          storage: { name: "Samsung 980 PRO 1TB", price: "$120" },
          psu: { name: "EVGA SuperNOVA 850 G6", price: "$150" },
          case: { name: "Lian Li Lancool III", price: "$130" }
        }
      },
      {
        name: "Intel Core i5-13600KF",
        generation: "Raptor Lake",
        price: "$300",
        compatibleParts: {
          motherboard: { name: "ASUS TUF Gaming Z790-PLUS", price: "$250" },
          ram: { name: "32GB DDR5-5600", price: "$200" },
          cooler: { name: "ARCTIC Liquid Freezer II 280", price: "$120" },
          gpu: { name: "NVIDIA RTX 4070 Ti", price: "$800" },
          storage: { name: "Kingston KC3000 2TB", price: "$180" },
          psu: { name: "Corsair RM1000e", price: "$180" },
          case: { name: "NZXT H7 Flow", price: "$130" }
        }
      },
      {
        name: "Intel Core i3-12100F",
        generation: "Alder Lake",
        price: "$100",
        compatibleParts: {
          motherboard: { name: "MSI PRO B660M-A", price: "$140" },
          ram: { name: "16GB DDR4-3200", price: "$60" },
          cooler: { name: "Stock Intel Cooler", price: "$0" },
          gpu: { name: "NVIDIA RTX 3050", price: "$250" },
          storage: { name: "WD Blue SN570 500GB", price: "$50" },
          psu: { name: "EVGA 600 BR", price: "$60" },
          case: { name: "Cooler Master MasterBox NR400", price: "$70" }
        }
      },
      {
        name: "Intel Core i9-12900KS",
        generation: "Alder Lake",
        price: "$600",
        compatibleParts: {
          motherboard: { name: "ASUS ROG Strix Z690-E", price: "$400" },
          ram: { name: "64GB DDR5-6000", price: "$300" },
          cooler: { name: "EK-AIO 360 D-RGB", price: "$180" },
          gpu: { name: "NVIDIA RTX 3090 Ti", price: "$1100" },
          storage: { name: "Seagate FireCuda 530 2TB", price: "$200" },
          psu: { name: "be quiet! Dark Power Pro 12 1200W", price: "$250" },
          case: { name: "HYTE Y60", price: "$200" }
        }
      },
      {
        name: "Intel Core i5-12400F",
        generation: "Alder Lake",
        price: "$150",
        compatibleParts: {
          motherboard: { name: "Gigabyte B660 Gaming X AX", price: "$150" },
          ram: { name: "16GB DDR4-3200", price: "$60" },
          cooler: { name: "DeepCool AG400", price: "$25" },
          gpu: { name: "AMD RX 6600 XT", price: "$250" },
          storage: { name: "Crucial P3 Plus 1TB", price: "$80" },
          psu: { name: "Corsair CX650F", price: "$80" },
          case: { name: "Phanteks Eclipse G360A", price: "$80" }
        }
      },
      {
        name: "Intel Core i7-13700KF",
        generation: "Raptor Lake",
        price: "$400",
        compatibleParts: {
          motherboard: { name: "MSI MPG Z790 Carbon WiFi", price: "$350" },
          ram: { name: "64GB DDR5-6400", price: "$300" },
          cooler: { name: "Lian Li Galahad 360", price: "$170" },
          gpu: { name: "NVIDIA RTX 4080", price: "$1200" },
          storage: { name: "Samsung 990 PRO 2TB", price: "$200" },
          psu: { name: "ASUS ROG Thor 1000W", price: "$250" },
          case: { name: "Lian Li O11 Dynamic EVO", price: "$170" }
        }
      },
      {
        name: "Intel Core i3-13100",
        generation: "Raptor Lake",
        price: "$120",
        compatibleParts: {
          motherboard: { name: "ASRock B760M-HDV", price: "$100" },
          ram: { name: "16GB DDR4-3200", price: "$60" },
          cooler: { name: "Cooler Master Hyper 212 Spectrum", price: "$50" },
          gpu: { name: "Intel Arc A750", price: "$250" },
          storage: { name: "Teamgroup MP33 512GB", price: "$40" },
          psu: { name: "Thermaltake Smart BM2 550W", price: "$55" },
          case: { name: "Fractal Design Focus 2", price: "$70" }
        }
      },
      {
        name: "Intel Core i5-13400F",
        generation: "Raptor Lake",
        price: "$200",
        compatibleParts: {
          motherboard: { name: "ASUS PRIME B760-PLUS", price: "$150" },
          ram: { name: "32GB DDR4-3600", price: "$100" },
          cooler: { name: "be quiet! Shadow Rock 3", price: "$60" },
          gpu: { name: "NVIDIA RTX 4060", price: "$300" },
          storage: { name: "WD Black SN770 1TB", price: "$80" },
          psu: { name: "SeaSonic FOCUS GX-750", price: "$130" },
          case: { name: "Corsair 3000D Airflow", price: "$80" }
        }
      },
      // New 14th Gen builds
      {
        name: "Intel Core i9-14900K",
        generation: "Raptor Lake Refresh",
        price: "$600",
        compatibleParts: {
          motherboard: { name: "ASUS ROG Maximus Z790 Dark Hero", price: "$500" },
          ram: { name: "64GB DDR5-7200", price: "$300" },
          cooler: { name: "Corsair iCUE H170i ELITE LCD", price: "$220" },
          gpu: { name: "NVIDIA RTX 4090", price: "$1600" },
          storage: { name: "Samsung 990 PRO 4TB", price: "$400" },
          psu: { name: "Seasonic PRIME TX-1300W", price: "$300" },
          case: { name: "Lian Li PC-O11 Dynamic EVO XL", price: "$220" }
        }
      },
      {
        name: "Intel Core i7-14700K",
        generation: "Raptor Lake Refresh",
        price: "$450",
        compatibleParts: {
          motherboard: { name: "MSI MPG Z790 Carbon WiFi", price: "$350" },
          ram: { name: "32GB DDR5-6400", price: "$200" },
          cooler: { name: "ARCTIC Liquid Freezer II 420", price: "$150" },
          gpu: { name: "NVIDIA RTX 4080 Super", price: "$1000" },
          storage: { name: "WD Black SN850X 2TB", price: "$200" },
          psu: { name: "Corsair RM1000x SHIFT", price: "$180" },
          case: { name: "Fractal Design Torrent", price: "$170" }
        }
      },
      {
        name: "Intel Core i5-14600K",
        generation: "Raptor Lake Refresh",
        price: "$320",
        compatibleParts: {
          motherboard: { name: "Gigabyte Z790 AORUS Elite AX", price: "$250" },
          ram: { name: "32GB DDR5-6000", price: "$180" },
          cooler: { name: "DeepCool LS720", price: "$130" },
          gpu: { name: "NVIDIA RTX 4070 Ti Super", price: "$800" },
          storage: { name: "Crucial T700 1TB", price: "$150" },
          psu: { name: "be quiet! Straight Power 12 850W", price: "$150" },
          case: { name: "NZXT H7 Flow", price: "$130" }
        }
      },
      {
        name: "Intel Core i9-14900KF",
        generation: "Raptor Lake Refresh",
        price: "$580",
        compatibleParts: {
          motherboard: { name: "ASUS ROG Strix Z790-E Gaming WiFi II", price: "$450" },
          ram: { name: "64GB DDR5-6800", price: "$280" },
          cooler: { name: "Lian Li Galahad II Trinity Performance", price: "$170" },
          gpu: { name: "AMD RX 7900 XTX", price: "$1000" },
          storage: { name: "Seagate FireCuda 540 2TB", price: "$220" },
          psu: { name: "Thermaltake Toughpower GF3 1200W", price: "$220" },
          case: { name: "HYTE Y70 Touch", price: "$250" }
        }
      },
      {
        name: "Intel Core i7-14700KF",
        generation: "Raptor Lake Refresh",
        price: "$430",
        compatibleParts: {
          motherboard: { name: "ASRock Z790 Taichi Lite", price: "$300" },
          ram: { name: "32GB DDR5-6200", price: "$220" },
          cooler: { name: "EK-Nucleus AIO CR360", price: "$180" },
          gpu: { name: "NVIDIA RTX 4070 Super", price: "$600" },
          storage: { name: "Kingston Fury Renegade 2TB", price: "$180" },
          psu: { name: "MSI MPG A850G PCIE5", price: "$130" },
          case: { name: "Corsair 5000D Airflow", price: "$150" }
        }
      },
      {
        name: "Intel Core i5-14600KF",
        generation: "Raptor Lake Refresh",
        price: "$300",
        compatibleParts: {
          motherboard: { name: "ASUS TUF Gaming Z790-Pro WiFi", price: "$250" },
          ram: { name: "32GB DDR5-5600", price: "$180" },
          cooler: { name: "Noctua NH-D15 chromax.black", price: "$110" },
          gpu: { name: "NVIDIA RTX 4060 Ti 16GB", price: "$450" },
          storage: { name: "Lexar NM790 2TB", price: "$150" },
          psu: { name: "EVGA SuperNOVA 850 G7", price: "$130" },
          case: { name: "Phanteks Eclipse G500A", price: "$120" }
        }
      },
      {
        name: "Intel Core i5-14400F",
        generation: "Raptor Lake Refresh",
        price: "$170",
        compatibleParts: {
          motherboard: { name: "MSI PRO B760-P WiFi", price: "$150" },
          ram: { name: "32GB DDR5-5200", price: "$160" },
          cooler: { name: "Thermalright Peerless Assassin 120 SE", price: "$35" },
          gpu: { name: "Intel Arc A770 16GB", price: "$350" },
          storage: { name: "Teamgroup MP44 1TB", price: "$80" },
          psu: { name: "Cooler Master MWE Gold 750W", price: "$90" },
          case: { name: "Fractal Design Pop Air", price: "$80" }
        }
      }
    ]
  },

  amd: {
    // AM4 (15 builds)
    am4: [
      {
        name: "AMD Ryzen 5 3600",
        generation: "Zen 2",
        price: "$120",
        compatibleParts: {
          motherboard: { name: "MSI B450 TOMAHAWK MAX", price: "$120" },
          ram: { name: "16GB DDR4-3200", price: "$60" },
          cooler: { name: "Stock Wraith Stealth", price: "$0" },
          gpu: { name: "AMD RX 5700 XT", price: "$350" },
          storage: { name: "Crucial MX500 1TB", price: "$100" },
          psu: { name: "EVGA 650 BQ", price: "$80" },
          case: { name: "Phanteks P300", price: "$60" }
        }
      },
      {
        name: "AMD Ryzen 7 5800X",
        generation: "Zen 3",
        price: "$250",
        compatibleParts: {
          motherboard: { name: "ASUS ROG Strix B550-F", price: "$180" },
          ram: { name: "32GB DDR4-3600", price: "$120" },
          cooler: { name: "Noctua NH-D15", price: "$110" },
          gpu: { name: "NVIDIA RTX 3070", price: "$500" },
          storage: { name: "Samsung 970 EVO Plus 1TB", price: "$120" },
          psu: { name: "Corsair RM750x", price: "$120" },
          case: { name: "Lian Li Lancool 215", price: "$90" }
        }
      },
      {
        name: "AMD Ryzen 9 5950X",
        generation: "Zen 3",
        price: "$450",
        compatibleParts: {
          motherboard: { name: "Gigabyte X570 AORUS Master", price: "$300" },
          ram: { name: "64GB DDR4-3600", price: "$200" },
          cooler: { name: "ARCTIC Liquid Freezer II 360", price: "$130" },
          gpu: { name: "AMD RX 6900 XT", price: "$700" },
          storage: { name: "Sabrent Rocket 4 Plus 2TB", price: "$250" },
          psu: { name: "Seasonic FOCUS GX-1000", price: "$180" },
          case: { name: "be quiet! Silent Base 802", price: "$150" }
        }
      },
      {
        name: "AMD Ryzen 3 3100",
        generation: "Zen 2",
        price: "$100",
        compatibleParts: {
          motherboard: { name: "ASRock B450M Pro4", price: "$80" },
          ram: { name: "16GB DDR4-3000", price: "$60" },
          cooler: { name: "Stock Wraith Stealth", price: "$0" },
          gpu: { name: "NVIDIA GTX 1650 Super", price: "$160" },
          storage: { name: "WD Blue SN550 500GB", price: "$60" },
          psu: { name: "EVGA 500 BR", price: "$50" },
          case: { name: "Cooler Master MasterBox Q300L", price: "$50" }
        }
      },
      {
        name: "AMD Ryzen 5 5600G",
        generation: "Zen 3",
        price: "$130",
        compatibleParts: {
          motherboard: { name: "ASUS TUF Gaming B550M-PLUS", price: "$120" },
          ram: { name: "16GB DDR4-3200", price: "$70" },
          cooler: { name: "Stock Wraith Stealth", price: "$0" },
          gpu: { name: "Integrated Vega 7", price: "$0" },
          storage: { name: "Kingston A2000 1TB", price: "$90" },
          psu: { name: "Corsair CX450", price: "$50" },
          case: { name: "Thermaltake Versa H18", price: "$50" }
        }
      },
      {
        name: "AMD Ryzen 7 3700X",
        generation: "Zen 2",
        price: "$200",
        compatibleParts: {
          motherboard: { name: "MSI X470 Gaming Plus", price: "$120" },
          ram: { name: "32GB DDR4-3200", price: "$120" },
          cooler: { name: "Stock Wraith Prism", price: "$0" },
          gpu: { name: "NVIDIA RTX 2070 Super", price: "$400" },
          storage: { name: "HP EX950 1TB", price: "$100" },
          psu: { name: "SeaSonic FOCUS 650W", price: "$90" },
          case: { name: "NZXT H510", price: "$70" }
        }
      },
      {
        name: "AMD Ryzen 9 3900X",
        generation: "Zen 2",
        price: "$300",
        compatibleParts: {
          motherboard: { name: "ASUS ROG Crosshair VII Hero", price: "$250" },
          ram: { name: "64GB DDR4-3600", price: "$220" },
          cooler: { name: "Corsair H115i RGB Platinum", price: "$140" },
          gpu: { name: "NVIDIA RTX 2080 Ti", price: "$600" },
          storage: { name: "Samsung 970 PRO 1TB", price: "$150" },
          psu: { name: "EVGA SuperNOVA 850 G5", price: "$130" },
          case: { name: "Cooler Master H500M", price: "$120" }
        }
      },
      {
        name: "AMD Ryzen 5 5500",
        generation: "Zen 3",
        price: "$100",
        compatibleParts: {
          motherboard: { name: "Gigabyte B550M DS3H", price: "$100" },
          ram: { name: "16GB DDR4-3200", price: "$60" },
          cooler: { name: "DeepCool GAMMAXX 400", price: "$25" },
          gpu: { name: "NVIDIA GTX 1660", price: "$150" },
          storage: { name: "Crucial P2 500GB", price: "$50" },
          psu: { name: "Thermaltake Smart 600W", price: "$60" },
          case: { name: "Fractal Design Focus G", price: "$60" }
        }
      },
      {
        name: "AMD Ryzen 7 5700X",
        generation: "Zen 3",
        price: "$200",
        compatibleParts: {
          motherboard: { name: "ASRock B550 Steel Legend", price: "$140" },
          ram: { name: "32GB DDR4-3600", price: "$120" },
          cooler: { name: "Scythe Fuma 2", price: "$65" },
          gpu: { name: "NVIDIA RTX 3060 Ti", price: "$400" },
          storage: { name: "WD Black SN750 SE 1TB", price: "$100" },
          psu: { name: "Corsair RM750", price: "$110" },
          case: { name: "Phanteks Eclipse P400A", price: "$80" }
        }
      },
      {
        name: "AMD Ryzen 9 5900X",
        generation: "Zen 3",
        price: "$350",
        compatibleParts: {
          motherboard: { name: "ASUS ROG Strix X570-E", price: "$300" },
          ram: { name: "64GB DDR4-3600", price: "$220" },
          cooler: { name: "NZXT Kraken X73", price: "$170" },
          gpu: { name: "NVIDIA RTX 3080", price: "$700" },
          storage: { name: "Samsung 980 PRO 2TB", price: "$200" },
          psu: { name: "SeaSonic PRIME GX-1000", price: "$180" },
          case: { name: "Lian Li PC-O11 Dynamic", price: "$140" }
        }
      },
      // New AM4 builds
      {
        name: "AMD Ryzen 5 5600",
        generation: "Zen 3",
        price: "$140",
        compatibleParts: {
          motherboard: { name: "MSI B550M PRO-VDH WIFI", price: "$120" },
          ram: { name: "16GB DDR4-3200", price: "$50" },
          cooler: { name: "Stock Wraith Stealth", price: "$0" },
          gpu: { name: "NVIDIA RTX 3060", price: "$290" },
          storage: { name: "Crucial P3 1TB", price: "$70" },
          psu: { name: "EVGA 600 BR", price: "$60" },
          case: { name: "Cooler Master Q300L", price: "$50" }
        }
      },
      {
        name: "AMD Ryzen 5 5600X",
        generation: "Zen 3",
        price: "$170",
        compatibleParts: {
          motherboard: { name: "ASUS TUF B550-PLUS", price: "$150" },
          ram: { name: "16GB DDR4-3600", price: "$60" },
          cooler: { name: "DeepCool GAMMAXX 400", price: "$20" },
          gpu: { name: "AMD RX 6700 XT", price: "$330" },
          storage: { name: "WD Blue SN570 1TB", price: "$80" },
          psu: { name: "Corsair CX650F", price: "$80" },
          case: { name: "Phanteks Eclipse P360A", price: "$70" }
        }
      },
      {
        name: "AMD Ryzen 3 1300X",
        generation: "Zen 1",
        price: "$60",
        compatibleParts: {
          motherboard: { name: "ASRock AB350M Pro4", price: "$70" },
          ram: { name: "8GB DDR4-2666", price: "$30" },
          cooler: { name: "Stock Wraith Stealth", price: "$0" },
          gpu: { name: "NVIDIA GTX 1650", price: "$160" },
          storage: { name: "Kingston A400 480GB", price: "$35" },
          psu: { name: "EVGA 500W", price: "$45" },
          case: { name: "Thermaltake Versa H17", price: "$45" }
        }
      },
      {
        name: "AMD Ryzen 7 5800X3D",
        generation: "Zen 3",
        price: "$320",
        compatibleParts: {
          motherboard: { name: "Gigabyte B550 AORUS PRO AC", price: "$180" },
          ram: { name: "32GB DDR4-3600", price: "$100" },
          cooler: { name: "Noctua NH-U12S", price: "$70" },
          gpu: { name: "NVIDIA RTX 4070", price: "$550" },
          storage: { name: "Samsung 980 PRO 1TB", price: "$100" },
          psu: { name: "Corsair RM750x", price: "$110" },
          case: { name: "Lian Li Lancool 215", price: "$90" }
        }
      },
      {
        name: "AMD Ryzen 9 3950X",
        generation: "Zen 2",
        price: "$400",
        compatibleParts: {
          motherboard: { name: "ASUS ROG Crosshair VIII Hero", price: "$350" },
          ram: { name: "64GB DDR4-3600", price: "$250" },
          cooler: { name: "NZXT Kraken Z73", price: "$250" },
          gpu: { name: "NVIDIA RTX 3090", price: "$1500" },
          storage: { name: "Sabrent Rocket 4 Plus 4TB", price: "$400" },
          psu: { name: "Corsair AX1600i", price: "$450" },
          case: { name: "Lian Li PC-O11 Dynamic XL", price: "$200" }
        }
      }
    ],

    // AM5 (15 builds)
    am5: [
      {
        name: "AMD Ryzen 5 7600X",
        generation: "Zen 4",
        price: "$250",
        compatibleParts: {
          motherboard: { name: "Gigabyte B650 AORUS Elite AX", price: "$220" },
          ram: { name: "32GB DDR5-6000", price: "$150" },
          cooler: { name: "DeepCool AK620", price: "$65" },
          gpu: { name: "NVIDIA RTX 4070", price: "$550" },
          storage: { name: "WD Black SN770 1TB", price: "$80" },
          psu: { name: "Corsair RM750e", price: "$120" },
          case: { name: "Fractal Design Pop Air", price: "$80" }
        }
      },
      {
        name: "AMD Ryzen 7 7800X3D",
        generation: "Zen 4",
        price: "$450",
        compatibleParts: {
          motherboard: { name: "MSI MAG B650 TOMAHAWK WIFI", price: "$220" },
          ram: { name: "32GB DDR5-6000", price: "$150" },
          cooler: { name: "Noctua NH-U12A", price: "$120" },
          gpu: { name: "AMD RX 7900 XTX", price: "$1000" },
          storage: { name: "Samsung 990 PRO 2TB", price: "$200" },
          psu: { name: "be quiet! Straight Power 11 850W", price: "$150" },
          case: { name: "HYTE Y60", price: "$200" }
        }
      },
      {
        name: "AMD Ryzen 9 7950X",
        generation: "Zen 4",
        price: "$600",
        compatibleParts: {
          motherboard: { name: "ASUS ROG Crosshair X670E Hero", price: "$500" },
          ram: { name: "64GB DDR5-6000", price: "$300" },
          cooler: { name: "Corsair iCUE H150i ELITE LCD", price: "$200" },
          gpu: { name: "NVIDIA RTX 4090", price: "$1600" },
          storage: { name: "Seagate FireCuda 530 2TB", price: "$200" },
          psu: { name: "ASUS ROG Thor 1200W", price: "$250" },
          case: { name: "Lian Li O11 Dynamic EVO", price: "$170" }
        }
      },
      {
        name: "AMD Ryzen 5 8600G",
        generation: "Zen 4",
        price: "$230",
        compatibleParts: {
          motherboard: { name: "ASRock B650M-HDV/M.2", price: "$120" },
          ram: { name: "32GB DDR5-5600", price: "$140" },
          cooler: { name: "Stock Wraith Stealth", price: "$0" },
          gpu: { name: "Integrated Radeon 760M", price: "$0" },
          storage: { name: "Crucial T500 1TB", price: "$100" },
          psu: { name: "Thermaltake Toughpower GX2 600W", price: "$80" },
          case: { name: "Cooler Master MasterBox NR200", price: "$80" }
        }
      },
      {
        name: "AMD Ryzen 7 7700",
        generation: "Zen 4",
        price: "$330",
        compatibleParts: {
          motherboard: { name: "Gigabyte B650M DS3H", price: "$150" },
          ram: { name: "32GB DDR5-5200", price: "$130" },
          cooler: { name: "DeepCool AG400", price: "$30" },
          gpu: { name: "NVIDIA RTX 4060 Ti", price: "$400" },
          storage: { name: "Teamgroup MP44L 1TB", price: "$80" },
          psu: { name: "EVGA SuperNOVA 650 GT", price: "$90" },
          case: { name: "NZXT H5 Flow", price: "$90" }
        }
      },
      {
        name: "AMD Ryzen 9 7900X",
        generation: "Zen 4",
        price: "$450",
        compatibleParts: {
          motherboard: { name: "ASUS TUF Gaming X670E-PLUS", price: "$300" },
          ram: { name: "64GB DDR5-6000", price: "$280" },
          cooler: { name: "ARCTIC Liquid Freezer II 420", price: "$150" },
          gpu: { name: "NVIDIA RTX 4080 Super", price: "$1000" },
          storage: { name: "Kingston Fury Renegade 2TB", price: "$180" },
          psu: { name: "MSI MEG Ai1300P", price: "$300" },
          case: { name: "Phanteks Enthoo Pro 2", price: "$250" }
        }
      },
      {
        name: "AMD Ryzen 5 7600",
        generation: "Zen 4",
        price: "$220",
        compatibleParts: {
          motherboard: { name: "MSI PRO B650-P WIFI", price: "$180" },
          ram: { name: "32GB DDR5-5600", price: "$130" },
          cooler: { name: "Thermalright Peerless Assassin 120", price: "$40" },
          gpu: { name: "AMD RX 7700 XT", price: "$450" },
          storage: { name: "Lexar NM790 1TB", price: "$80" },
          psu: { name: "Corsair RM850e", price: "$130" },
          case: { name: "DeepCool CH560", price: "$100" }
        }
      },
      {
        name: "AMD Ryzen 7 7700X",
        generation: "Zen 4",
        price: "$350",
        compatibleParts: {
          motherboard: { name: "ASRock X670E Steel Legend", price: "$280" },
          ram: { name: "32GB DDR5-6000", price: "$160" },
          cooler: { name: "EK-Nucleus AIO CR360", price: "$180" },
          gpu: { name: "NVIDIA RTX 4070 Ti Super", price: "$800" },
          storage: { name: "Solidigm P44 Pro 2TB", price: "$180" },
          psu: { name: "be quiet! Dark Power 13 1000W", price: "$200" },
          case: { name: "Fractal Design North", price: "$140" }
        }
      },
      {
        name: "AMD Ryzen 9 7900X3D",
        generation: "Zen 4",
        price: "$550",
        compatibleParts: {
          motherboard: { name: "Gigabyte X670E AORUS Master", price: "$350" },
          ram: { name: "64GB DDR5-6000", price: "$300" },
          cooler: { name: "Lian Li Galahad II Performance", price: "$170" },
          gpu: { name: "AMD RX 7900 XT", price: "$800" },
          storage: { name: "WD Black SN850X 4TB", price: "$400" },
          psu: { name: "Seasonic VERTEX GX-1200", price: "$250" },
          case: { name: "Corsair 7000D Airflow", price: "$250" }
        }
      },
      {
        name: "AMD Ryzen 5 7500F",
        generation: "Zen 4",
        price: "$180",
        compatibleParts: {
          motherboard: { name: "ASUS PRIME B650M-A WIFI", price: "$150" },
          ram: { name: "32GB DDR5-5200", price: "$120" },
          cooler: { name: "ID-COOLING SE-214-XT", price: "$20" },
          gpu: { name: "NVIDIA RTX 4060", price: "$300" },
          storage: { name: "Samsung 980 1TB", price: "$80" },
          psu: { name: "Cooler Master MWE Gold 650W", price: "$90" },
          case: { name: "Montech AIR 903 MAX", price: "$75" }
        }
      },
      // New AM5 builds
      {
        name: "AMD Ryzen 7 9800X3D",
        generation: "Zen 5",
        price: "$500",
        compatibleParts: {
          motherboard: { name: "ASUS ROG Strix X870E-E", price: "$400" },
          ram: { name: "32GB DDR5-6400", price: "$180" },
          cooler: { name: "Corsair iCUE H150i ELITE LCD", price: "$200" },
          gpu: { name: "NVIDIA RTX 5090", price: "$2000" },
          storage: { name: "Samsung 990 PRO 2TB", price: "$200" },
          psu: { name: "Seasonic PRIME TX-1300W", price: "$300" },
          case: { name: "HYTE Y70 Touch", price: "$250" }
        }
      },
      {
        name: "AMD Ryzen 9 9950X3D",
        generation: "Zen 5",
        price: "$800",
        compatibleParts: {
          motherboard: { name: "Gigabyte X870E AORUS XTREME", price: "$500" },
          ram: { name: "64GB DDR5-6600", price: "$350" },
          cooler: { name: "ARCTIC Liquid Freezer III 420", price: "$150" },
          gpu: { name: "AMD RX 8900 XTX", price: "$1500" },
          storage: { name: "WD Black SN850X 4TB", price: "$400" },
          psu: { name: "be quiet! Dark Power 13 1600W", price: "$350" },
          case: { name: "Lian Li PC-O11 Dynamic EVO XL", price: "$220" }
        }
      },
      {
        name: "AMD Ryzen 5 9600X",
        generation: "Zen 5",
        price: "$300",
        compatibleParts: {
          motherboard: { name: "MSI B650 TOMAHAWK WIFI", price: "$200" },
          ram: { name: "32GB DDR5-6000", price: "$150" },
          cooler: { name: "DeepCool AK620", price: "$65" },
          gpu: { name: "NVIDIA RTX 5070", price: "$800" },
          storage: { name: "Crucial T700 1TB", price: "$150" },
          psu: { name: "Corsair RM850e", price: "$120" },
          case: { name: "Fractal Design North", price: "$140" }
        }
      },
      {
        name: "AMD Ryzen 7 9700X",
        generation: "Zen 5",
        price: "$400",
        compatibleParts: {
          motherboard: { name: "ASRock X670E Taichi", price: "$350" },
          ram: { name: "64GB DDR5-6400", price: "$300" },
          cooler: { name: "NZXT Kraken Elite 360", price: "$250" },
          gpu: { name: "NVIDIA RTX 5080", price: "$1200" },
          storage: { name: "Seagate FireCuda 540 4TB", price: "$400" },
          psu: { name: "Thermaltake Toughpower GF3 1350W", price: "$250" },
          case: { name: "Lian Li V3000 Plus", price: "$300" }
        }
      },
      {
        name: "AMD Ryzen 9 9900X",
        generation: "Zen 5",
        price: "$600",
        compatibleParts: {
          motherboard: { name: "ASUS ROG Crosshair X870E Hero", price: "$450" },
          ram: { name: "128GB DDR5-6000", price: "$500" },
          cooler: { name: "EK-Quantum Magnitude", price: "$300" },
          gpu: { name: "NVIDIA RTX 4090 Ti", price: "$2000" },
          storage: { name: "Sabrent Rocket 5 4TB", price: "$500" },
          psu: { name: "Corsair AX1600i", price: "$450" },
          case: { name: "Phanteks Enthoo Elite", price: "$900" }
        }
      }
    ]
  }
};