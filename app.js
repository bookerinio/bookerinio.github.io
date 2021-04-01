function refresh() {
    location.reload();
}

function check() {
    var R = 0,
        B = 0,
        A = 0,
        S = 0,
        I = 0,
        T = 0;

    var input = document.getElementsByTagName("input");

    for (var i = 0; i < input.length; i++) {
        if (input[i].name == "R" && input[i].checked == true) {
            R++;
        } else if (input[i].name == "B" && input[i].checked == true) {
            B++;
        } else if (input[i].name == "A" && input[i].checked == true) {
            A++;
        } else if (input[i].name == "S" && input[i].checked == true) {
            S++;
        } else if (input[i].name == "I" && input[i].checked == true) {
            I++;
        } else if (input[i].name == "T" && input[i].checked == true) {
            T++;
        }
    }
    var description = document.getElementById("description");
    var questions = document.getElementById("questions");

    var tablica = {
        R: R,
        B: B,
        A: A,
        S: S,
        I: I,
        T: T
    };
    var tabela = [];
    for (var TYP in tablica) {
        tabela.push([TYP + " = ", tablica[TYP], "; "]);
    }
    tabela.sort(function (b, a) {
        return a[1] - b[1]
    });

    if (R == 0 && B == 0 && A == 0 && S == 0 && I == 0 && T == 0) {
        alert("Nie wybrano żadnego punktu!")
    } else {
        description.innerHTML = "<div id='info'><h2>Który identyfikator zebrał najwięcej punktów? Tym typem osobowości zawodowej prawdopodobnie jesteś, oczywiście możesz być typem mieszanym (z domieszką pozostałych).<br><br>Oznaczenie identyfikatorów, czyli typów osobowości zawodowej:<br>R – typ realistyczny<br>B – typ badawczy<br>A – typ artystyczny<br>S – typ społeczny<br>I – typ inicjator (przedsiębiorczy)<br>T – typ tradycjonalista (konwencjonalny)</h2></div>";
        questions.style.textAlign = "center";
        if (tabela[0].toString().slice(0, 1) == "R") {
            questions.innerHTML = "<h3>" + tabela.toString().replaceAll(",", "") + "</h3><p style='font-size: 50px'><b>Typ realistyczny (R)</b></p><p style='font-size: 28px'>Lubisz działać i rozwiązywać różne problemy, a do tego dobrze się czujesz pracując fizycznie. Uważasz się za osobę praktyczną, która posiada zdolności manualne. Rozwiązujesz więc problemy, ale nie do końca dobrze czujesz się w kontaktach z innymi ludźmi.</p><ul><li><b>Umiejętności:</b> często są to zdolności mechaniczne i siła fizyczna; Umiejętności manualne, koordynacja wzrokowo-ruchowa, talenty praktyczne oraz przestrzeganie reguł</li><li><b>Wartości:</b> przede wszystkim zdrowy rozsądek, ale czasem i odważny styl życia; do tego uczciwość oraz mocny charakter; Twoje korzyści materialne uzależnione od efektów pracy</li><li><b>Czynności:</b> wszelkie związane z aktywnością fizyczną</li><li><b>Samoocena:</b> określasz się jako człowiek praktyczny, nieco konserwatywny, ale posiadający lepsze zdolności manualne niż społeczne</li><li><b>Odbiór społeczny:</b> często jesteś oceniany jako wytrwały, szczery, gospodarny, polegający na sobie</li><li><b>Proponowane zawody:</b> ogrodnik, rolnik, leśnik, elektryk, optyk, kierowca, mechanik, pilot, tapicer oraz wszelkie zawody rzemieślnicze</li></ul><button id='refresh-btn' onclick='refresh()'>POWTÓRZ TEST</button>";
        } else if (tabela[0].toString().slice(0, 1) == "B") {
            questions.innerHTML = "<h3>" + tabela.toString().replaceAll(",", "") + "</h3><p style='font-size: 60px'><b>Typ badawczy (B)</b></p><p style='font-size: 30px'>Lubisz analizować jakieś zjawiska, myśli lub uczucia, dążysz do zrozumienia świata. Do tego preferujesz problemy wymagające większego myślenia, oceniania i tworzenia teorii. Jesteś indywidualistą i nie bardzo lubisz kierować innymi ludźmi.</p><ul><li><b>Umiejętności:</b> przede wszystkim wszelkie naukowe, analityczne, matematyczne; posiadasz „łatwość” studiowana i pogłębianie wiedzy, szukania ambitnych rozwiązań</li><li><b>Wartości:</b> na pewno nauka, wiedza plus wykształcenie i ekspertyzm</li><li><b>Czynności:</b> oczywiście intelektualne, analityczne, badawcze; ukierunkowane na rozwiązywanie trudności</li><li><b>Samoocena:</b> uważasz się za osobę inteligentną i dokładną, nieco sceptyczną</li><li><b>Odbiór społeczny:</b> często jesteś oceniany jako inteligentny, wykształcony, ale i niezależny z podejściem introwertycznym</li><li><b>Proponowane zawody:</b> socjolog, biolog, antropolog, filozof, geolog, fizyk, matematyk, astronom, archeolog, chemik, programista, farmaceuta, historyk, politolog, meteorolog</li></ul><button id='refresh-btn'  onclick='refresh()'>POWTÓRZ TEST</button>";
        } else if (tabela[0].toString().slice(0, 1) == "A") {
            questions.innerHTML = "<h3>" + tabela.toString().replaceAll(",", "") + "</h3><p style='font-size: 60px'><b>Typ artystyczny (A)</b></p><p style='font-size: 30px'>Kreatywność to Twoje drugie imię, a do tego cenisz estetykę i piękno. Jesteś wrażliwym intelektualistą, masz bujną wyobraźnie, oczywiście przez co jesteś bardzo twórczy i otwarty na otoczenie, ale przy tym niezależny i unikasz utartych reguł, rutyny.</p><ul><li><b>Umiejętności:</b> oczywiście inteligencja, innowacyjność, kreatywność; masz wyostrzone zmysły: wzroku, słuchu, dotyku</li><li><b>Wartości:</b> cenisz piękno i oryginalność; jesteś niezależnym idealistą</li><li><b>Czynności:</b> wszelkie aktywności twórcze: aktorskie, muzyczne, literackie, plastyczne; ale i aktywność intelektualna</li><li><b>Samoocena:</b> uważasz się za osobę obdarzoną bogatą wyobraźnią, otwartą na otoczenie, ale i za niezależnego intelektualistę</li><li><b>Odbiór społeczny:</b> często jesteś oceniany jako skomplikowany idealista, ale i człowiek niezwykły, wrażliwy, twórczy; uważaj bo też niedbały i niepraktyczny</li><li><b>Proponowane zawody:</b> aktor, dekorator wnętrz, pisarz, malarz, fotograf, architekt, dyrygent, kompozytor, muzyk, tancerz, wizażysta, rzeźbiarz, projektant mody, plastyk</li></ul><button id='refresh-btn' onclick='refresh()'>POWTÓRZ TEST</button>";
        } else if (tabela[0].toString().slice(0, 1) == "S") {
            questions.innerHTML = "<h3>" + tabela.toString().replaceAll(",", "") + "</h3><p style='font-size: 60px'><b>Typ społeczny (S)</b></p><p style='font-size: 30px'>Lubisz pracować z ludźmi, w grupie; doradzać (nauczać), wyjaśniać i opiekować się innymi. Do tego jesteś uprzejmy, uczuciowy i życzliwy. Ale z drugiej strony unikasz pracy fizycznej i nie bardzo lubisz zajęcia związane z technologiami lub zajęciami manualnymi.</p><ul><li><b>Umiejętności:</b> posiadasz bardzo dobre talenty społeczne, komunikacyjne; jesteś empatyczny, życzliwy i towarzyski; wpływasz nawet kojąco na niektórych ludzi</li><li><b>Wartości:</b> nieco idealizujesz, kierujesz się sprawiedliwością i odpowiedzialnością, troszczysz się o innych ludzi</li><li><b>Czynności:</b> przede wszystkim praca z innymi ludźmi</li><li><b>Samoocena:</b> uważasz się za osobę odpowiedzialną, otwartą, cierpliwą</li><li><b>Odbiór społeczny:</b> często jesteś oceniany jako przyjazny, uczynny i współczujący; dobry człowiek</li><li><b>Proponowane zawody:</b> pielęgniarka, lekarz, masażysta, fizjoterapeuta, logopeda, masażysta, psycholog, pracownik socjalny, bibliotekarz, hostessa, ksiądz, nauczyciel, policjant, ratownik, kelner, stewardessa, trener</li></ul><button id='refresh-btn' onclick='refresh()'>POWTÓRZ TEST</button>";
        } else if (tabela[0].toString().slice(0, 1) == "I") {
            questions.innerHTML = "<h3>" + tabela.toString().replaceAll(",", "") + "</h3><p style='font-size: 60px'><b>Typ przedsiębiorczy (inicjator I)</b></p><p style='font-size: 30px'>Jesteś „człowiekiem sukcesu”, dobrze czujesz się pracując z ludźmi, ale i zarządzając nimi. Lubisz przewodzić, przekonywać innych, a do tego jesteś odważny i chętnie podejmujesz ryzyko. Dążysz do uzyskania władzy, sprawdzasz się jako charyzmatyczny lider.</p><ul><li><b>Umiejętności:</b> oczywiście umiejętności menedżerskie, organizacyjne; wysoka pewność siebie, perswazja, mówca</li><li><b>Wartości:</b> pociąga Cię władza, pieniądze i wpływy społeczne</li><li><b>Czynności:</b> przywództwo, kierowanie</li><li><b>Samoocena:</b> uważasz się za osobę pewną siebie, energiczną i optymistyczną, lubisz podejmować ryzyko, jesteś popularny i towarzyski</li><li><b>Odbiór społeczny:</b> często jesteś oceniany jako osoba władcza i pewna siebie, ale bystra i ambitna, przykuwasz uwagę; często dążąca do przyjemności i dbająca o zyski</li><li><b>Proponowane zawody:</b> prawnik, adwokat, sędzia, notariusz, dyplomata, doradca podatkowy, agent ubezpieczeniowy, makler, menedżer, handlowiec</li></ul><button id='refresh-btn' onclick='refresh()'>POWTÓRZ TEST</button>";
        } else if (tabela[0].toString().slice(0, 1) == "T") {
            questions.innerHTML = "<h3>" + tabela.toString().replaceAll(",", "") + "</h3><p style='font-size: 60px'><b>Typ konwencjonalny (tradycjonalista T)</b></p><p style='font-size: 30px'>Lubisz porządek, ład, bezpieczeństwo i działasz według ściśle określonych reguł. Pasjonuje Cię praca związana z porządkowaniem danych, rozwiązywaniem problemów o ustalone zasady i procedury. Jesteś sumienny, systematyczny i skuteczny w swoim działaniu.</p><ul><li><b>Umiejętności:</b> oczywiście uzdolnienia urzędnicze i organizacyjne; do tego rzetelność, dokładność, subordynacja oraz umiejętność ścisłego przestrzegania procedur</li><li><b>Wartości:</b> bardzo często oszczędność, zarabianie pieniędzy</li><li><b>Czynności:</b> lubisz czynności formularzowe, raportowe</li><li><b>Samoocena:</b> uważasz się za osobę sumienną i dokładną, przy czym nierozrzutną i praktyczną</li><li><b>Odbiór społeczny:</b> często jesteś oceniany jako osoba systematyczna, zasadnicza, a przy tym skuteczna i rozważna, niestety też jako ta bez wyobraźni, kontrolującą się i pedantyczna</li><li><b>Proponowane zawody:</b> agent celny, agent ubezpieczeniowy, księgowy, kasjer, radca prawny,archiwista, statystyk, recepcjonista, kosztorysant, inkasent, technik BHP</li></ul><button id='refresh-btn' onclick='refresh()'>POWTÓRZ TEST</button>";
        }
    }
}
