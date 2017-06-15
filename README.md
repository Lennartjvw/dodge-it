<h1>Installatie:<h1>

<p>Maak een gitclone of download het zip bestand van het project
Draai vervolgens je MAMP (of programma naar keuze) en nu kan je
hem lokaal bekijken
<p>

<p>Om het project aan te passen, installeer Visual Studio Code (andere editor kan ook).
En vervolgens open je het project in Visual Studio Code.
<p>

<h1>Technieken gebruikt:<h1>
<p>Interface<p>
<p>Static Utility Method<p>
<p>Singleton<p>
<p>Stragety<p>
<p>Encapsulation, Composition, Inheritance<p>

<h1>Live game:<h1>
<p>https://stud.hosted.hr.nl/0917734/dodge-it/docs/<p>


<h1>Peer review door: Tom Vrijmoet<h1>
<p>Op het moment van het maken van deze peer review zit nog niet alles in het project.
Het eerste dat ik tegen kom is utils.ts. Hier zouden wat extra dingen aan toegevoegd kunnen worden. Bijvoorbeeld dat de class static gemaakt wordt. Er hoeft hier verder niks aan veranderd te worden dus deze functie kan prima static worden. <br>
In gameobject.ts wordt alles netjes gedaan. Alle variabelen staan op protected maar ze hebben wel allemaal public setters en getters. Encapsulation is hier dus netjes gedaan. <br>
Het eerste dat me in player.ts opvalt is dat de x en y hier worden gevuld. Dat terwijl deze ook in gameobject.ts staan. <br>
In de constructor worden er 2 behaviours toegevoegd aan de player. Ik denk dat het beter zou zijn om een extra behaviour (idle?) aan te maken en hierin alle andere behaviours toevoegen. Zo hoef je maar 1 keer een behaviour toevoegen en vervolgens alles vanuit die behaviour doen. <br>
Blocks.ts heeft hetzelfde probleem met de x en y, dit zou je ook makkelijk mee kunnen geven aan de super en dit in gameobjects.ts doen. In behaviour zelf kan je ook in plaats van de functies "duck" en "jump" gewoon keypresses toevoegen. Dit geeft ze een algemener gebruik en kan in de toekomst handiger zijn mocht je dingen aan willen passen. <br>
In jumping.ts wordt gecontroleerd of hij op dat moment al aan het jumpen is. Dit is ook iets dat niet zou hoeven als je een extra behaviour (idle?) hebt.<br>
Main.ts wordt nog niet aangeroepen dmv een singleton call. Wel tof dat de update van level.ts wordt aangroepen in de main.ts. Hier zou je later coole dingen mee kunnen doen door meerdere levels toe te voegen. De functie removeBlockFromArray() in level.ts is ook een functie die mooier zou staan static in de utils.ts. <br> <br>
Dingen die ik nog mis: Singleton, Observer, static method, observer, abstract class, polymorphisme, namespace, enumaration, library.<p>
