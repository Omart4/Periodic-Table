class Element{
    constructor(name,anum,amas,stt,den,mp,bp,eshel,rad,db,dd,img){
        this.name = name
        this.anum = anum;
        this.amas = amas;
        this.stt = stt;
        this.den = den;
        this.mp = mp;
        this.bp = bp;
        this.eshel = eshel;
        this.rad = rad;
        this.db = db;
        this.dd = dd;
        this.img = img;
    }

    CtoF_mp(){
        let fahrenheit = this.mp * (9 / 5) + 32;
        return this.mpf = Math.round((fahrenheit + Number.EPSILON) * 100) / 100;;
    }

    CtoF_bp(){
        let fahrenheit = this.bp * (9 / 5) + 32;
        return this.bpf = Math.round((fahrenheit + Number.EPSILON) * 100) / 100;;
    }

}
let modal = document.getElementById('info-box')
let closer = document.getElementById('close')

let H = new Element("Hydrogen","1","1.007825","Gas","0.0899*10<sup>-3</sup>",- 259.2,- 252.8,"1s<sup>1</sup>","No","Henry Cavendish","1766","H.png");
let Li = new Element("Lithium","3","6.941","Solid","0.53", 180.5 , 1342 ,"1s<sup>2</sup>2s<sup>1</sup>","No","Johann Arfvedson","1817","Li.png");
let Na = new Element("Sodium","11","22.98977","Solid","0.97", 97.5 , 883 ,"1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>1</sup>","No","Sir Humphrey Davy","1807","Na.png");
let K = new Element("Potassium ","19","39.0983","Solid","0.86", 63.2 , 760  ,"1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>1</sup>","No","Sir Davy","1808","K.png");
let Rb = new Element("Rubidium","37","85.4678","Solid","1.53", 39 , 696  ,"1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>4p<sup>6</sup>5s<sup>1</sup>","No","Robert Wilhem Bunsen and Gustav Robert Kirchhoff","1861","Rb.png");
let Cs = new Element("Cesium","55","132.9054","Solid","1.9", 28.4 , 671  ,"[Xe] 6s<sup>1</sup>","No","Fustov Kirchhoff","1860","Cs.png");
let Fr = new Element("Francium","87","233","Solid","Unknown", 21 , 650  ,"[Rn] 7s<sup>1</sup>","Yes","Marguerite Perey","1939","Fr.png");
let Be = new Element("Beryllium","4","9.01218","Solid","1.86", 1280 , 2970 ,"1s<sup>2</sup>2s<sup>2</sup>","No","Abbé René-Just Hauy","1798","Be.png");
let Mg = new Element("Magnesium","12","24.305","Solid","1.74", 650 , 1090 ,"[Ne] 3s<sup>2</sup>","No","Joseph Black","1755","Mg.png");
let Ca = new Element("Calcium","20","40.078","Solid","1.54", 842 , 1484 ,"[Ar] 4s<sup>2</sup>","No","Humphry Davy","1808 ","Ca.png");
let Sr = new Element("Strontium","38","87.62","Solid","2.64", 777 , 1377 ,"[Kr] 5s<sup>2</sup>","No","Adair Crawford","1790 ","Sr.png");
let Ba = new Element("Barium","56","137.327","Solid","3.62 ", 727 , 1845 ,"[Xe] 6s<sup>2</sup>","No","Humphry Davy","1808 ","Ba.png");
let Ra = new Element("Radium","88","226","Solid","5", 696 , 1500 ,"[Rn] 7s<sup>2</sup>","Yes","Pierre and Marie Curie","1898 ","Ra.png");
let Sc = new Element("Scandium","21","44.956","Solid","2.99", 1541 , 2836 ,"[Ar] 3d<sup>1</sup>4s<sup>2</sup>","No","Lars Frederik Nilson","1879 ","Sc.png");
let Y = new Element("Yttrium","39","88.906","Solid","4.47", 1522 , 3345 ,"[Kr] 4d<sup>1</sup>5s<sup>2</sup>","No","Johan Gadolin","1794","Y.png");
let La = new Element("Lanthanum","57","138.905","Solid","6.15", 920 , 3464 ,"[Xe] 5d<sup>1</sup>6s<sup>2</sup>","Yes","Carl Gustav Mosander","1839","La.png");
let Ac = new Element("Actinium","89","227","Solid","10", 1050 , 3200 ,"[Rn] 6d<sup>1</sup>7s<sup>2</sup>","Yes","Andrew Debierne","1899","Ac.png");
let Ti = new Element("Titanium","22","47.867","Solid","4.506", 1670 , 3287 ,"[Ar] 3d<sup>2</sup>4s<sup>2</sup>","No","William Gregor","1791","Ti.png");
let Zr = new Element("Zirconium","40","91.224","Solid","6.52", 1854 , 4406 ,"[Kr] 4d<sup>2</sup>5s<sup>2</sup>","No","Martin Heinrich Klaproth","1789","Zr.png");
let Hf = new Element("Hafnium","72","178.486","Solid","13.2", 2233 , 4600 ,"[Xe] 4f<sup>14</sup>5d<sup>2</sup>6s<sup>2</sup>","No","George Charles de Hevesy and Dirk Coster","1923","Hf.png");
let Rf = new Element("Rutherfordium","104","267","Solid","Unknown", "Unknown" , "Unknown" ,"[Rn] 5f<sup>14</sup>6d<sup>2</sup>7s<sup>2</sup>","Yes","Georgy Flerov","1964","Rf.png");
let V = new Element("Vandium","23","50.942","Solid","6.0", 1910 , 3407 ,"[Ar] 3d<sup>2</sup>4s<sup>2</sup>","No","Andrés Manuel del Rio","1801","V.png");
let Nb = new Element("Niobium","41","92.906","Solid","8.57", 2477 , 4741 ,"[Kr] 4d<sup>4</sup>5s<sup>1</sup>","No","Charles Hatchett","1801","Nb.png");
let Ta = new Element("Tantalum","73","180.948","Solid","16.4", 3017 , 5455 ,"[Xe] 4f<sup>14</sup>5d<sup>3</sup>6s<sup>2</sup>","No","Anders Gustav Ekeberg","1802","Ta.png");
let Db = new Element("Dubnium","105","268","Solid","Unknown", "Unknown" , "Unknown" ,"[Rn] 5f<sup>14</sup>6d<sup>3</sup>7s<sup>2</sup>","Yes","Scientists at both Berkeley, California, USA, and Dubna, near Moscow, Russia","1968-1970","Db.png");
let Cr = new Element("Chromium","24","51.966","Solid","7.15", 1907 , 2671 ,"[Ar] 3d<sup>5</sup>4s<sup>1</sup>","No","Nicholas Louis Vauquelin","1798","Cr.png");
let Mo = new Element("Molybdenum","42","95.95","Solid","10.2", 2622 , 4639 ,"[Kr] 4d<sup>5</sup>5s<sup>1</sup>","No","Peter Jacob Hjelm","1781","Mo.png");
let W = new Element("Tungsten","74","183.84","Solid","19.3", 3414 , 5555 ,"[Xe] 4f<sup>14</sup>5d<sup>4</sup>6s<sup>2</sup>","No","Juan and Fausto Elhuyar","1783","W.png");
let Sg = new Element("Seaborgium","106","269","Solid","Unknown", "Unknown" , "Unknown" ,"[Rn] 5f<sup>14</sup>6d<sup>4</sup>7s<sup>2</sup>","Yes","Albert Ghiorso and colleagues","1974","Sg.png");
let Mn = new Element("Manganese","25","54.938","Solid","7.3", 1246 , 2061 ,"[Ar] 3d<sup>5</sup>4s<sup>2</sup>","No","Johan Gottlieb Gahn","1774","Mn.png");
let Tc = new Element("Technetium","43","98","Solid","11", 2157 , 4262 ,"[Kr] 4d<sup>5</sup>5s<sup>2</sup>","Yes","Carlo Perrier and Emilio Segrè","1937","Tc.png");
let Re = new Element("Rhenium","75","186.207","Solid","20.8", 3185 , 5590 ,"[Xe] 4f<sup>14</sup>5d<sup>5</sup>6s<sup>2</sup>","No","Walter Noddack, Ida Tacke and Otto Berg","1925","Re.png");
let Bh = new Element("Bohrium","107","270","Solid","Unknown", "Unknown" , "Unknown" ,"[Rn] 5f<sup>14</sup>6d<sup>5</sup>7s<sup>2</sup>","Yes","Peter Armbruster, Gottfried Münzenberg and colleagues","1981","Bh.png");
let Fe = new Element("Iron","26","55.845","Solid","7.87", 1538 , 2861 ,"[Ar] 3d<sup>6</sup>4s<sup>2</sup>","No","Johan Gottlieb Gahn","approx 3500BC","Fe.png");
let Ru = new Element("Ruthenium","44","101.07","Solid","12.1", 2333 , 4147 ,"[Kr] 4d<sup>7</sup>5s<sup>1</sup>","No","Karl Karlovich Klaus","1844","Ru.png");
let Os = new Element("Osmium","76","190.23","Solid","22.5872", 3033 , 5008 ,"[Xe] 4f<sup>14</sup>5d<sup>6</sup>6s<sup>2</sup>","No","Smithson Tennant","1803","Os.png");
let Hs = new Element("Hassium","108","269","Solid","Unknown", "Unknown" , "Unknown" ,"[Rn] 5f<sup>14</sup>6d<sup>6</sup>7s<sup>2</sup>","Yes","Peter Armbruster, Gottfried Münzenberg","1984","Hs.png");
let Co = new Element("Cobalt","27","58.933","Solid","8.86", 1495 , 2927 ,"[Ar] 3d<sup>7</sup>4s<sup>2</sup>","No","Georg Brandt","1736","Co.png");
let Rh = new Element("Ruthenium","45","102.906","Solid","12.4", 1963 , 3695 ,"[Kr] 4d<sup>8</sup>5s<sup>1</sup>","No","William Hyde Wollaston ","1803","Rh.png");
let Ir = new Element("Iridium","77","192.217","Solid","22.5622", 2446 , 4428 ,"[Xe] 4f<sup>14</sup>5d<sup>7</sup>6s<sup>2</sup>","No","Smithson Tennant","1803","Ir.png");
let Mt = new Element("Meitnerium","109","278","Solid","Unknown", "Unknown" , "Unknown" ,"[Rn] 5f<sup>14</sup>6d<sup>7</sup>7s<sup>2</sup>","Yes","Peter Armbruster, Gottfried Münzenberg","1982","Mt.png");
let Ni = new Element("Nickel","28","58.693","Solid","8.9", 1455 , 2913 ,"[Ar] 3d<sup>8</sup>4s<sup>2</sup>","No","Axel Fredrik Cronstedt","1751","Ni.png");
let Pd = new Element("Palladium","46","106.42","Solid","12.0", 1554.8 , 2963 ,"[Kr] 4d<sup>10</sup>","No","William Hyde Wollaston ","1803","Pd.png");
let Pt = new Element("Platinum","78","195.084","Solid","21.5", 1768.2 , 3825 ,"[Xe] 4f<sup>14</sup>5d<sup>9</sup>6s<sup>1</sup>","No","	Antonio de Ulloa","1735","Pt.png");
let Ds = new Element("Darmstadium","110","281","Solid","Unknown", "Unknown" , "Unknown" ,"[Rn] 5f<sup>14</sup>6d<sup>9</sup>7s<sup>1</sup>","Yes","Sigurd Hofmann,Peter Armbruster, Gottfried Münzenberg","1994","Ds.png");
let Cu = new Element("Copper","29","63.546","Solid","8.96", 1084.62 , 2650 ,"[Ar] 3d<sup>10</sup>4s<sup>1</sup>","No","-","Prehistory","Cu.png");
let Ag  = new Element("Silver","47","107.868","Solid","10.5", 961.78 , 2162 ,"[Kr] 4d<sup>10</sup>5s<sup>1</sup>","No","-","approx 3000BC","Ag.png");
let Au = new Element("Gold","79","196.967","Solid","19.3", 1064.18 , 2836 ,"[Xe] 4f<sup>14</sup>5d<sup>10</sup>6s<sup>1</sup>","No","-","approx 3000BC","Au.png");
let Rg = new Element("Roentgenium","111","280","Solid","Unknown", "Unknown" , "Unknown" ,"[Rn] 5f<sup>14</sup>6d<sup>10</sup>7s<sup>1</sup>","Yes","Peter Armbruster, Gottfried Münzenberg","1994","Ds.png");
let Zn = new Element("Zinc","30","65.38","Solid","7.134", 419.527 , 907 ,"[Ar] 3d<sup>10</sup>4s<sup>2</sup>","No","Andreas Marggraf","Identified as an element in 1746, but known to the Greeks and Romans before 20BC. ","Zn.png");
let Cd = new Element("Cadmium","48","112.414","Solid","8.69", 321.069 , 767 ,"[Kr] 4d<sup>10</sup>5s<sup>2</sup>","No","Friedrich Stromeyer","1817","Cd.png");
let Hg = new Element("Mercury","80","200.592","Solid","13.5336", -38.829 , 356.619 ,"[Xe] 4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>","No","-","approx 1500BC","Hg.png");
let Cn = new Element("Copernicium","112","285","Solid","Unknown", "Unknown" , "Unknown" ,"[Rn] 5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>","Yes","Sigurd Hofmann and colleagues","1996","Cn.png");
let B = new Element("Boron","5","10.81","Solid","2.34", 2077 , 4000 ,"[He] 2s<sup>2</sup>2p<sup>1</sup>","No","Louis-Josef Gay-Lussac and Louis-Jacques Thénard","1808","B.png");
let Al = new Element("Aluminum","13","26.982","Solid","2.7", 660.323 , 2519 ,"[Ne] 3s<sup>2</sup>3p<sup>1</sup>","No","Hans Oersted","1825","Al.png");
let Ga = new Element("Gallium","31","69.723","Solid","5.91", 29.7646 , 2229 ,"[Ar] 3d<sup>10</sup>4s<sup>2</sup>4p<sup>1</sup>","No","Paul-Émile Lecoq de Boisbaudran","1875","Ga.png");
let In = new Element("Indium","49","114.818","Solid","7.31", 156.6 , 2027 ,"[Kr] 4d<sup>10</sup>5s<sup>2</sup>5p<sup>1</sup>","No","Ferdinand Reich and Hieronymous Richter","1863","In.png");
let Tl = new Element("Thallium","81","204.38","Solid","11.8", 304 , 1473 ,"[Xe] 4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>1</sup>","No","William Crookes","1861","Tl.png");
let Nh = new Element("Nihonium","113","286","Solid","Unknown", "Unknown" , "Unknown" ,"[Rn] 5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>1</sup>","Yes","Scientists from RIKEN in Japan","2004","Nh.png");
let C = new Element("Carbon","6","12.011","Solid","2.2", "Sublimes at 3825°C" , "Sublimes at 3825°C" ,"[He] 2s<sup>2</sup>2p<sup>2</sup>","No","-","Prehistoric","C.png");
let Si = new Element("Silicon","14","28.085","Solid","2.3296", 1414 , 3265 ,"[Ne] 3s<sup>2</sup>3p<sup>2</sup>","No","Jöns Jacob Berzelius","1824","Si.png");
let Ge = new Element("Germanium","32","72.630","Solid","5.3234", 938.25 , 2833 ,"[Ar] 3d<sup>10</sup>4s<sup>2</sup>4p<sup>2</sup>","No","Clemens Winkler","1886","Ge.png");
let Sn = new Element("Tin","50","118.710","Solid","7.287", 231.928 , 2586 ,"[Kr] 4d<sup>10</sup>5s<sup>2</sup>5p<sup>2</sup>","No","-","approx. 2100 B.C.","Sn.png");
let Pb = new Element("Lead","82","207.2","Solid","11.3", 327.462 , 1749 ,"[Xe] 4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>2</sup>","No","-","approx. 2100 B.C.","Pb.png");
let Fl = new Element("Flerovium","114","289","Solid","Unknown", "Unknown" , "Unknown" ,"[Rn] 5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>2</sup>","Yes","Scientists from the Joint Institute for Nuclear Research in Dubna, Russia","1999","Fl.png");
let N = new Element("Nitrogen","7","14.007","Gas","0.001145", -210 , -195.795 ,"[He] 2s<sup>2</sup>2p<sup>3</sup>","No","Daniel Rutherford","1772","N.png");
let P = new Element("Phosphorus","15","30.974","Solid","1.823", 44.15 , 280.5 ,"[Ne] 3s<sup>2</sup>3p<sup>3</sup>","No","Hennig Brandt","1669","P.png");
let As = new Element("Arsenic","33","74.922","Solid","5.75", "Sublimes at 616" , "Sublimes at 616" ,"[Ar] 3d<sup>10</sup>4s<sup>2</sup>4p<sup>3</sup>","No","Albertus Magnus","approx 1250","As.png");
let Sb = new Element("Antimony","51","121.760","Solid","6.68", 630.628 , 1587 ,"[Kr] 4d<sup>10</sup>5s<sup>2</sup>5p<sup>3</sup>","No","-","approx 1600 B.C.","Sb.png");
let Bi = new Element("Bismuth","83","208.980","Solid","9.79", 271.406 , 1564 ,"[Xe] 4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>3</sup>","No","-","approx 1500","Bi.png");
let Mc = new Element("Moscovium","115","289","Solid","Unknown", "Unknown" , "Unknown" ,"[Rn] 5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>3</sup>","Yes","Scientists from the Joint Institute for Nuclear Research in Dubna, Russia","2010","Mc.png");
let O = new Element("Oxygen","8","15.999","Gas","0.001308", -218.79 , -182.962 ,"[He] 2s<sup>2</sup>2p<sup>4</sup>","No","Joseph Priestley","1774","O.png");
let S = new Element("Sulfur","16","32.06","Solid","2.07", 115.21 , 444.61 ,"[Ne] 3s<sup>2</sup>3p<sup>4</sup>","No","-","Prehistoric","S.png");
let Se = new Element("Selenium","34","78.971","Solid","4.809", 220.8 , 685 ,"[Ar] 3d<sup>10</sup>4s<sup>2</sup>4p<sup>4</sup>","No","Jöns Jacob Berzelius","1817","Se.png");
let Te = new Element("Tellurium","52","127.6","Solid","6.232", 449.51 , 988 ,"[Kr] 4d<sup>10</sup>5s<sup>2</sup>5p<sup>4</sup>","No","Franz-Joseph Müller von Reichenstein","1783","Te.png");
let Po = new Element("Polonium","84","209","Solid","9.2", 254 , 962 ,"[Xe] 4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>4</sup>","Yes","Marie Curie","1898","Po.png");
let Lv = new Element("Livermorium","116","293","Solid","Unknown", "Unknown" , "Unknown" ,"[Rn] 5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>4</sup>","Yes","Scientists from the Joint Institute for Nuclear Research in Dubna, Russia","2000","Lv.png");
let F = new Element("Fluorine","9","18.998","Gas","0.001553", -219.67 , -188.11 ,"[He] 2s<sup>2</sup>2p<sup>5</sup>","No","Henri Moissan","1886","F.png");
let Cl = new Element("Chlorine","17","35.45","Gas","0.002898", -101.5 , -34.04 ,"[Ne] 3s<sup>2</sup>3p<sup>5</sup>","No","1774","Carl Wilhelm Scheele","Cl.png");
let Br = new Element("Bromine","35","79.904","Liquid","3.1028", -7.2 , 58.8 ,"[Ar] 3d<sup>10</sup>4s<sup>2</sup>4p<sup>5</sup>","No","Antoine-Jérôme Balard and Carl Löwig","1826","Br.png");
let I = new Element("Iodine","53","126.904","Solid","4.933", 113.7 , 184.4 ,"[Kr] 4d<sup>10</sup>5s<sup>2</sup>5p<sup>2</sup>","No","Bernard Courtois","1811","I.png");
let At = new Element("Astatine","85","210","Solid","Unknown", 300 , 350 ,"[Xe] 4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>5</sup>","Yes","Dale R. Corson, Kenneth Ross MacKenzie, Emilio Segrè","1940","At.png");
let Ts = new Element("Tennessine","117","294","Solid","Unknown", "Unknown" , "Unknown" ,"[Rn] 5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>5</sup>","Yes","Scientists from the Joint Institute for Nuclear Research in Dubna, Russia","2010","Ts.png");
let He = new Element("Helium","2","4.003","Gas","0.000164", "Unknown" , -268.928 ,"1s<sup>2</sup>","No","1895","Sir William Ramsay","He.png");
let Ne = new Element("Neon","10","20.180","Gas","0.000852", -248.59 , -246.046 ,"[He] 2s<sup>2</sup>2p<sup>6</sup>","No","Sir William Ramsay and Morris Travers","1898","Ne.png");
let Ar = new Element("Argon","18","39.95","Gas","0.001633", -189.34 , -185.848 ,"[Ne] 3s<sup>2</sup>3p<sup>6</sup>","No","1894","Lord Rayleigh and Sir William Ramsay","Ar.png");
let Kr = new Element("Krypton","36","83.798","Gas","0.003425", -157.37 , -153.415 ,"[Ar] 3d<sup>10</sup>4s<sup>2</sup>4p<sup>6</sup>","No","Sir William Ramsay and Morris Travers","1898","Kr.png");
let Xe = new Element("Xenon","54","131.293","Gas","0.005366", -111.75 , -108.099 ,"[Kr] 4d<sup>10</sup>5s<sup>2</sup>5p<sup>6</sup>","No","Sir William Ramsay and Morris Travers","1898","Xe.png");
let Rn = new Element("Radon","86","222","Gas","0.009074", -71 , -61.7 ,"[Xe] 4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>6</sup>","Yes","Friedrich Ernst Dorn","1900","Rn.png");
let Og = new Element("Oganesson","118","294","Solid","Unknown", "Unknown" , "Unknown" ,"[Rn] 5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>5</sup>","Yes","Scientists from the Joint Institute for Nuclear Research in Dubna, Russia","2006","Og.png");
let Ce = new Element("Cerium","58","140.116","Solid","6.77", 799 , 3443 ,"[Xe] 4f<sup>1</sup>5d<sup>1</sup>6s<sup>2</sup>","No","Jöns Jacob Berzelius and Wilhelm Hisinger","1803","Ce.png");
let Pr = new Element("Praseodymium","59","140.908","Solid","6.77", 931 , 3520 ,"[Xe] 4f<sup>3</sup>6s<sup>2</sup>","No","Carl Auer von Welsbach","1885","Pr.png");
let Nd = new Element("Neodymium","60","144.242","Solid","7.01", 1016 , 3074 ,"[Xe] 4f<sup>4</sup>6s<sup>2</sup>","No","Carl Auer von Welsbach","1885","Nd.png");
let Pm = new Element("Promethium","61","145","Solid","7.26", 1042 , 3000 ,"[Xe] 4f<sup>5</sup>6s<sup>2</sup>","Yes","Jacob .A. Marinsky, Lawrence E. Glendenin, and Charles D. Coryell","1945","Pm.png");
let Sm = new Element("Samarium","62","150.36","Solid","7.52", 1072 , 1764 ,"[Xe] 4f<sup>6</sup>6s<sup>2</sup>","No","Paul-Émile Lecoq de Boisbaudran","1879","Sm.png");
let Eu = new Element("Europium","63","151.964","Solid","5.24", 822 , 1529 ,"[Xe] 4f<sup>7</sup>6s<sup>2</sup>","No","Eugène-Anatole Demarçay","1901","Eu.png");
let Gd = new Element("Gadolinium","64","157.25","Solid","7.9", 1313 , 3273 ,"[Xe] 4f<sup>7</sup>5d<sup>1</sup>6s<sup>2</sup>","No","Jean Charles Galissard de Marignac","1880","Gd.png");
let Tb = new Element("Terbium","65","158.925","Solid","8.23", 1359 , 3230 ,"[Xe] 4f<sup>9</sup>6s<sup>2</sup>","No","Carl Gustav Mosander","1843","Tb.png");
let Dy = new Element("Dysprosium","66","162.500","Solid","8.55", 1412 , 2567 ,"[Xe] 4f<sup>10</sup>6s<sup>2</sup>","No","Paul-Émile Lecoq de Boisbaudran","1886","Dy.png");
let Ho = new Element("Holmium","67","164.930","Solid","8.8", 1472 , 2700 ,"[Xe] 4f<sup>11</sup>6s<sup>2</sup>","No","Per Teodor Cleve","1878","Ho.png");
let Er = new Element("Erbium","68","167.259","Solid","9.07", 1529 , 2868 ,"[Xe] 4f<sup>12</sup>6s<sup>2</sup>","No","Carl Gustav Mosander","1843","Er.png");
let Tm = new Element("Thulium","69","168.934","Solid","9.32", 1545 , 1950 ,"[Xe] 4f<sup>13</sup>6s<sup>2</sup>","No","Per Teodor Cleve","1879","Tm.png");
let Yb = new Element("Ytterbium","70","173.045","Solid","6.9", 824 , 1196 ,"[Xe] 4f<sup>14</sup>6s<sup>2</sup>","No","Jean Charles Galissard de Marignac","1878","Yb.png");
let Lu = new Element("Lutetium","71","174.697","Solid","9.84", 1663 , 3402 ,"[Xe] 4f<sup>14</sup>5d<sup>1</sup>6s<sup>2</sup>","No","Georges Urbain","1907","Lu.png");

function expand(){
    document.getElementById('H').addEventListener("click" , function(){ elementDet(H) });
    document.getElementById('Li').addEventListener("click" , function(){ elementDet(Li) });
    document.getElementById('Na').addEventListener("click" , function(){ elementDet(Na) });
    document.getElementById('K').addEventListener("click" , function(){ elementDet(K) });
    document.getElementById('Rb').addEventListener("click" , function(){ elementDet(Rb) });
    document.getElementById('Cs').addEventListener("click" , function(){ elementDet(Cs) });
    document.getElementById('Fr').addEventListener("click" , function(){ elementDet(Fr) });
    document.getElementById('Be').addEventListener("click" , function(){ elementDet(Be) });
    document.getElementById('Mg').addEventListener("click" , function(){ elementDet(Mg) });
    document.getElementById('Ca').addEventListener("click" , function(){ elementDet(Ca) });
    document.getElementById('Sr').addEventListener("click" , function(){ elementDet(Sr) });
    document.getElementById('Ba').addEventListener("click" , function(){ elementDet(Ba) });
    document.getElementById('Ra').addEventListener("click" , function(){ elementDet(Ra) });
    document.getElementById('sc').addEventListener("click" , function(){ elementDet(Sc) });
    document.getElementById('y').addEventListener("click" , function(){ elementDet(Y) });
    document.getElementById('la').addEventListener("click" , function(){ elementDet(La) });
    document.getElementById('ac').addEventListener("click" , function(){ elementDet(Ac) });
    document.getElementById('ti').addEventListener("click" , function(){ elementDet(Ti) });
    document.getElementById('zr').addEventListener("click" , function(){ elementDet(Zr) });
    document.getElementById('hf').addEventListener("click" , function(){ elementDet(Hf) });
    document.getElementById('rf').addEventListener("click" , function(){ elementDet(Rf) });
    document.getElementById('v').addEventListener("click" , function(){ elementDet(V) });
    document.getElementById('nb').addEventListener("click" , function(){ elementDet(Nb) });
    document.getElementById('ta').addEventListener("click" , function(){ elementDet(Ta) });
    document.getElementById('db').addEventListener("click" , function(){ elementDet(Db) });
    document.getElementById('cr').addEventListener("click" , function(){ elementDet(Cr) });
    document.getElementById('mo').addEventListener("click" , function(){ elementDet(Mo) });
    document.getElementById('w').addEventListener("click" , function(){ elementDet(W) });
    document.getElementById('sg').addEventListener("click" , function(){ elementDet(Sg) });
    document.getElementById('mn').addEventListener("click" , function(){ elementDet(Mn) });
    document.getElementById('tc').addEventListener("click" , function(){ elementDet(Tc) });
    document.getElementById('re').addEventListener("click" , function(){ elementDet(Re) });
    document.getElementById('bh').addEventListener("click" , function(){ elementDet(Bh) });
    document.getElementById('fe').addEventListener("click" , function(){ elementDet(Fe) });
    document.getElementById('ru').addEventListener("click" , function(){ elementDet(Ru) });
    document.getElementById('os').addEventListener("click" , function(){ elementDet(Os) });
    document.getElementById('hs').addEventListener("click" , function(){ elementDet(Hs) });
    document.getElementById('co').addEventListener("click" , function(){ elementDet(Co) });
    document.getElementById('rh').addEventListener("click" , function(){ elementDet(Rh) });
    document.getElementById('ir').addEventListener("click" , function(){ elementDet(Ir) });
    document.getElementById('mt').addEventListener("click" , function(){ elementDet(Mt) });
    document.getElementById('ni').addEventListener("click" , function(){ elementDet(Ni) });
    document.getElementById('pd').addEventListener("click" , function(){ elementDet(Pd) });
    document.getElementById('pt').addEventListener("click" , function(){ elementDet(Pt) });
    document.getElementById('ds').addEventListener("click" , function(){ elementDet(Ds) });
    document.getElementById('cu').addEventListener("click" , function(){ elementDet(Cu) });
    document.getElementById('ag').addEventListener("click" , function(){ elementDet(Ag) });
    document.getElementById('au').addEventListener("click" , function(){ elementDet(Au) });
    document.getElementById('rg').addEventListener("click" , function(){ elementDet(Rg) });
    document.getElementById('zn').addEventListener("click" , function(){ elementDet(Zn) });
    document.getElementById('cd').addEventListener("click" , function(){ elementDet(Cd) });
    document.getElementById('hg').addEventListener("click" , function(){ elementDet(Hg) });
    document.getElementById('cn').addEventListener("click" , function(){ elementDet(Cn) });
    document.getElementById('b').addEventListener("click" , function(){ elementDet(B) });
    document.getElementById('al').addEventListener("click" , function(){ elementDet(Al) });
    document.getElementById('ga').addEventListener("click" , function(){ elementDet(Ga) });
    document.getElementById('in').addEventListener("click" , function(){ elementDet(In) });
    document.getElementById('tl').addEventListener("click" , function(){ elementDet(Tl) });
    document.getElementById('nh').addEventListener("click" , function(){ elementDet(Nh) });
    document.getElementById('c').addEventListener("click" , function(){ elementDet(C) });
    document.getElementById('si').addEventListener("click" , function(){ elementDet(Si) });
    document.getElementById('ge').addEventListener("click" , function(){ elementDet(Ge) });
    document.getElementById('sn').addEventListener("click" , function(){ elementDet(Sn) });
    document.getElementById('pb').addEventListener("click" , function(){ elementDet(Pb) });
    document.getElementById('fl').addEventListener("click" , function(){ elementDet(Fl) });
    document.getElementById('n').addEventListener("click" , function(){ elementDet(N) });
    document.getElementById('p').addEventListener("click" , function(){ elementDet(P) });
    document.getElementById('as').addEventListener("click" , function(){ elementDet(As) });
    document.getElementById('sb').addEventListener("click" , function(){ elementDet(Sb) });
    document.getElementById('bi').addEventListener("click" , function(){ elementDet(Bi) });
    document.getElementById('mc').addEventListener("click" , function(){ elementDet(Mc) });
    document.getElementById('o').addEventListener("click" , function(){ elementDet(O) });
    document.getElementById('s').addEventListener("click" , function(){ elementDet(S) });
    document.getElementById('se').addEventListener("click" , function(){ elementDet(Se) });
    document.getElementById('te').addEventListener("click" , function(){ elementDet(Te) });
    document.getElementById('po').addEventListener("click" , function(){ elementDet(Po) });
    document.getElementById('lv').addEventListener("click" , function(){ elementDet(Lv) });
    document.getElementById('f').addEventListener("click" , function(){ elementDet(F) });
    document.getElementById('cl').addEventListener("click" , function(){ elementDet(Cl) });
    document.getElementById('br').addEventListener("click" , function(){ elementDet(Br) });
    document.getElementById('i').addEventListener("click" , function(){ elementDet(I) });
    document.getElementById('at').addEventListener("click" , function(){ elementDet(At) });
    document.getElementById('ts').addEventListener("click" , function(){ elementDet(Ts) });
    document.getElementById('he').addEventListener("click" , function(){ elementDet(He) });
    document.getElementById('ne').addEventListener("click" , function(){ elementDet(Ne) });
    document.getElementById('ar').addEventListener("click" , function(){ elementDet(Ar) });
    document.getElementById('kr').addEventListener("click" , function(){ elementDet(Kr) });
    document.getElementById('xe').addEventListener("click" , function(){ elementDet(Xe) });
    document.getElementById('rn').addEventListener("click" , function(){ elementDet(Rn) });
    document.getElementById('og').addEventListener("click" , function(){ elementDet(Og) });
    document.getElementById('ce').addEventListener("click" , function(){ elementDet(Ce) });
    document.getElementById('pr').addEventListener("click" , function(){ elementDet(Pr) });
    document.getElementById('nd').addEventListener("click" , function(){ elementDet(Nd) });
    document.getElementById('pm').addEventListener("click" , function(){ elementDet(Pm) });
    document.getElementById('sm').addEventListener("click" , function(){ elementDet(Sm) });
    document.getElementById('eu').addEventListener("click" , function(){ elementDet(Eu) });
    document.getElementById('gd').addEventListener("click" , function(){ elementDet(Gd) });
    document.getElementById('tb').addEventListener("click" , function(){ elementDet(Tb) });
    document.getElementById('dy').addEventListener("click" , function(){ elementDet(Dy) });
    document.getElementById('ho').addEventListener("click" , function(){ elementDet(Ho) });
    document.getElementById('er').addEventListener("click" , function(){ elementDet(Er) });
    document.getElementById('tm').addEventListener("click" , function(){ elementDet(Tm) });
    document.getElementById('yb').addEventListener("click" , function(){ elementDet(Yb) });
    document.getElementById('lu').addEventListener("click" , function(){ elementDet(Lu) });
    document.getElementById('th').addEventListener("click" , function(){ elementDet(Th) });
    document.getElementById('pa').addEventListener("click" , function(){ elementDet(Pa) });
    document.getElementById('u').addEventListener("click" , function(){ elementDet(U) });
    document.getElementById('np').addEventListener("click" , function(){ elementDet(Np) });
    document.getElementById('pu').addEventListener("click" , function(){ elementDet(Pu) });
    document.getElementById('am').addEventListener("click" , function(){ elementDet(Am) });
    document.getElementById('cm').addEventListener("click" , function(){ elementDet(Cm) });
    document.getElementById('bk').addEventListener("click" , function(){ elementDet(Bk) });
    document.getElementById('cf').addEventListener("click" , function(){ elementDet(Cf) });
    document.getElementById('es').addEventListener("click" , function(){ elementDet(Es) });
    document.getElementById('fm').addEventListener("click" , function(){ elementDet(Fm) });
    document.getElementById('md').addEventListener("click" , function(){ elementDet(Md) });
    document.getElementById('no').addEventListener("click" , function(){ elementDet(No) });
    document.getElementById('lr').addEventListener("click" , function(){ elementDet(Lr) });


}
expand()

function elementDet(x){
    modal.style.display = 'block'
    document.getElementById('det').innerHTML = 
            `<div id="imbut">
            <h2 id="elname"><a href = "https://en.wikipedia.org/wiki/${x.name}" target="_blank">${x.name}<i class="fas fa-external-link-alt" id="external"></i></a></h2>
            <img src="${x.img}" alt="${x.name}" id="symbol">
            </div>
            <div id = "temps">
               <ul>
               <li>Melting point: ${x.mp} C°</li><br>
               <li>Boiling point: ${x.bp} C°</li><br>
               <li><button id="degf">Convert to Fahrenheit  <i class="fas fa-temperature-high" id="therm"></i></button></li>
               </ul>            
            </div>
               <ul>
               <li>Atomic number: ${x.anum}</li><br>
               <li>Atomic mass: ${x.amas} g.mol<sup>-1</sup></li><br>
               <li>Phase at STP: ${x.stt}</li><br>
               <li>Density: ${x.den} g.cm<sup>-3</sup></li><br>
               <li>Electronic Configuration: ${x.eshel}</li><br>
               <li>Radioactive? ${x.rad}</li><br>
               <li>Discoverd by: ${x.db}</li><br>
               <li>Discovery date: ${x.dd}</li><br>
            </ul>`;
            let MP = document.getElementById('degf');        
    function changeTempToF(){
        MP.addEventListener("click" , function(){
            document.getElementById('det').innerHTML = 
            `<div id="imbut">
            <h2 id="elname"><a href = "https://en.wikipedia.org/wiki/${x.name}" target="_blank">${x.name}<i class="fas fa-external-link-alt" id="external"></i></a></h2>
            <img src="${x.img}" alt="${x.name}" id="symbol">
            </div>
            <div id = "temps">
               <ul>
               <li>Melting point: ${x.CtoF_mp()} F°</li><br>
               <li>Boiling point: ${x.CtoF_bp()} F°</li><br>
               </ul>            
            </div>
            <ul>
                <li>Atomic number: ${x.anum}</li><br>
                <li>Atomic mass: ${x.amas} g.mol<sup>-1</sup></li><br>
                <li>Phase at STP: ${x.stt}</li><br>
                <li>Density: ${x.den} g.cm<sup>-3</sup></li><br>
                <li>Electronic Configuration: ${x.eshel}</li><br>
                <li>Radioactive? ${x.rad}</li><br>
                <li>Discoverd by: ${x.db}</li><br>
                <li>Discovery date: ${x.dd}</li><br>
            </ul>`
        });
    }
    changeTempToF();
    closer.addEventListener('click' , function(){
        modal.style.display = 'none'
    });

}
     