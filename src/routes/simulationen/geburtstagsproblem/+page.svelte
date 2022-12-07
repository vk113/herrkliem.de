<script>
    import Headline from "$lib/Headline.svelte";
	import MaterialList from "$lib/MaterialList.svelte";
    import Task from "$lib/Task.svelte";
	import TaskList from "$lib/TaskList.svelte";
    import YouTubeFrame from "$lib/YouTubeFrame.svelte";
    import {setContext} from 'svelte';
    import Help from '$lib/Help.svelte';
    import Choice from '$lib/Choice.svelte';
    import Info from '$lib/Info.svelte';
    setContext("color", "pink")
</script>


<Headline src="/geburtstagsproblem.png" title="Geburtstagsproblem" color="pink"/>
<TaskList>    
    <Task src="/vertauschte_briefe.png">
        <YouTubeFrame id="oT4Mp6Shkbg" />
    </Task>
    <Task i="1" title="Realsimulation">
        <MaterialList title="Materialien:">
            <ul class="list-disc ml-5">
                <li>
                    Geburtstagskalender 
                </li>
            </ul>
        </MaterialList>
        Erfragt bei euren Klassenkamerad*innen alle Geburtstage und tragt sie in den Geburtstagskalender ein. Hängt den Kalender anschließend im Klassenzimmer auf. Haben zwei Schüler*innen am selben Tag Geburtstag?
    </Task>
    <Task i=2 title="Simulation planen">
        <Info><b>Hinweis:</b> Zur Vereinfachung nehmen wir im Folgenden an, dass kein*e Schüler*in am 29.Februar Geburtstag hat.</Info>
        <b>Wie kann  dieses Problem mithilfe eines Tabellenkalkulationsprogramms simuliert werden?</b> <br/>
        Gliedert dazu die Simulation in einzelne Teilschritte. Formuliert jeden Teilschritt und notiert Excelfunktionen, die für diesen Schritt hilfreich sind.
        <Help title="Liste mit (verlinkten) Excelfunktionen" >
            <p class="excel-list">
                <a href="https://support.microsoft.com/de-de/office/zählenwenn-funktion-e0de10c6-f885-4e71-abb4-1f464816df34">ZÄHLENWENN</a>,
                <a href="https://support.microsoft.com/de-de/office/zufallsbereich-funktion-4cc7f0d1-87dc-4eb7-987f-a469ab381685">ZUFALLSBEREICH</a>,
                <a href="https://support.microsoft.com/de-de/office/wenn-funktion-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2">WENN</a>,
                <a href="https://support.microsoft.com/de-de/office/summe-funktion-043e1c7d-7726-4e80-8f32-07b23e057f89">SUMME</a>,
                <a href="https://support.microsoft.com/de-de/office/index-funktion-a5dcf0dd-996d-40a4-a822-b56b061328bd">INDEX</a>
            </p>
        </Help>
        <Help title="Wie können wir Geburtstage in Excel darstellen?">
            Da wir uns nur dafür interessieren, ob zwei Schüler*innen am selben Tag Geburtstag haben, genügt es vollkommen, wenn Zahlen zwischen 1 und 365 zugeordnet werden und nicht genaue Daten.
        </Help>

    </Task>
    <Task i="3-5" title="In Teilgruppen">
        Teilt eure Gruppe auf. <br/>
        Eine Teilgruppe wird für die Simulation in Excel hauptverantwortlich sein. Die zweite Teilgruppe berechnet mithilfe der im Unterricht erlernten Methoden die Wahrscheinlichkeit der jeweiligen Strategien. <br/>
        <b>
            Je nach Gruppe geht es jetzt für euch hier weiter: 
        </b>
        
        <Choice choices={[{href:"/simulationen/geburtstagsproblem/simulieren", text:"Simulieren"}, {href:"/simulationen/geburtstagsproblem/berechnen", text:"Berechnen"}]}/>

    </Task>

    <Task i=6 title="Austausch" id="anchor1">
        Präsentiert jeweils der anderen Teilgruppe eure Ergebnisse. <br/>
        <ol>
            <li>
                <b>Team Berechnen: </b> Erläutert eure Herleitung für die allgemeine Formel und präsentiert eure Daten für unterschiedliche Gruppengrößen.
            </li>
            <li>
                <b>Team Simulieren: </b> Präsentiert eure Simulation, insbesondere die Analyse der zufällig generierten Geburtstage.
            </li>
            <li>
                Vergleicht eure Ergebnisse für die Gruppe mit 23 Schüler*innen (und 40 Schüler*innen). Weichen die Ergebnisse voneinander ab? Wenn ja, warum?
            </li>
        </ol>        
    </Task>
    <Task i=7 title="Präsentation">
        Bereitet ein 8-minütiges Referat vor. <br/>
        <b>Checkliste:</b>
        <ul class="list-disc ml-10">
            <li>Einstieg der Interesse am Thema weckt und das Problem erklärt.</li>
            <li>Beschreibung der Teilschritte der Simulation</li>
            <li>Präsentation der Ergebnisse der Simulation</li>
            <li>Ergebnisse der Berechnungen</li>
            <li>Vergleich der Ergebnisse der Simulation mit den Ergebnissen der Berechnung</li>
        </ul>
    </Task>


</TaskList>