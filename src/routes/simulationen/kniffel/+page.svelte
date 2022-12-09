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
    setContext("color", "red")
</script>


<Headline src="/kniffel.png" title="Kniffel" color="red"/>
<TaskList>
    <Task title="Einstieg">
        <YouTubeFrame id="yJWp5mm0YM0" />
    </Task>

    <Task i="1" title="Realsimulation">
        <MaterialList title="Materialien:">
            <ul class="list-disc ml-5">
                <li>
                    Kniffelbecher 
                </li>
                <li>
                    5 Würfel
                </li>
            </ul>
        </MaterialList>
        Spielt je zu zweit das Spiel Kniffel. Versucht dabei in jedem Durchgang (drei Würfelwürfe) möglichst ein Kniffel zu werfen. Spielt mindestens so lange, bis einer von euch einen Kniffel erhält.
        Führt eine Strichliste, wie viele Versuche ihr gebraucht habt und gebt einen ersten Schätzwert für die Wahrscheinlichkeit ab.
    </Task>
    <Task i=2 title="Simulation planen">
        <b>Wie kann  dieses Problem mithilfe eines Tabellenkalkulationsprogramms simuliert werden?</b> <br/>
        <ol>
            <li>
                Formuliert zuerst, wie die optimale Strategie aussieht.
            </li>
            <li>
                Gliedert die Simulation in einzelne Teilschritte. Formuliert jeden Teilschritt und notiert Excelfunktionen, die für diesen Schritt hilfreich sind.
            </li>
        </ol>
        <Help title="Liste mit (verlinkten) Excelfunktionen" >
            <p class="excel-list">
                <a href="https://support.microsoft.com/de-de/office/zählenwenn-funktion-e0de10c6-f885-4e71-abb4-1f464816df34">ZÄHLENWENN</a>,
                <a href="https://support.microsoft.com/de-de/office/zufallsbereich-funktion-4cc7f0d1-87dc-4eb7-987f-a469ab381685">ZUFALLSBEREICH</a>,
                <a href="https://support.microsoft.com/de-de/office/wenn-funktion-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2">WENN</a>,
                <a href="https://support.microsoft.com/de-de/office/summe-funktion-043e1c7d-7726-4e80-8f32-07b23e057f89">SUMME</a>,
                <a href="https://support.microsoft.com/de-de/office/index-funktion-a5dcf0dd-996d-40a4-a822-b56b061328bd">INDEX</a>
            </p>
        </Help>
    </Task>
    <Task i="3-5" title="In Teilgruppen">
        Teilt eure Gruppe auf. <br/>
        Eine Teilgruppe wird für die Simulation in Excel hauptverantwortlich sein. Die zweite Teilgruppe berechnet mithilfe der im Unterricht erlernten Methoden die Wahrscheinlichkeit beim Würfeln mit drei Würfeln einen Kniffel zu erhalten. <br/>
        <b>
            Je nach Gruppe geht es jetzt für euch hier weiter: 
        </b>
        
        <Choice choices={[{href:"/simulationen/kniffel/simulieren", text:"Simulieren"}, {href:"/simulationen/kniffel/berechnen", text:"Berechnen"}]}/>

    </Task>

    <Task i=6 title="Austausch" id="anchor1">
        Präsentiert jeweils der anderen Teilgruppe eure Ergebnisse. <br/>
        <div class="grid grid-cols-2 gap-x-8 mt-2">
            <div>
                <div class="font-bold">Team Berechnen</div>
                <ol>
                    <li>
                        Erläutert eure Herleitung für das Würfeln mit drei Würfeln und präsentiert eure Ergebnisse.
                    </li>
                    <li>
                        Baut unter Anleitung des <b>Teams Simulieren</b> eine Simulation für das Würfeln mit drei Würfeln. 
                    </li>
                </ol>
            </div>
            <div>
                <div class="font-bold">Team Simulieren</div>
                <ol>
                    <li>
                        Präsentiert eure Simulation. Erklärt die einzelnen Teilschritte, insbesondere wie ihr die optimale Strategie implementiert habt.
                    </li>
                    <li>
                        Helft dem <b>Team Berechnen</b> beim Nachbauen der Simulation für das Würfeln mit drei Würfeln. (Regel: Finger weg von Maus und Tastatur! 😉)
                    </li>
                    
                </ol>
            </div>
        </div>
        Vergleicht die Ergebnisse der Simulation mit der Berechneten Wahrscheinlichkeit.
    </Task>
    <Task i=7 title="Präsentation">
        Bereitet ein 8-10 minütiges Referat vor. <br/>
        <b>Checkliste:</b>
        <ul class="list-disc ml-10">
            <li>Einstieg der Interesse am Thema weckt und das Problem erklärt.</li>
            <li>Beschreibung der optimalen Strategie.</li>
            <li>Beschreibung der Teilschritte der Simulation</li>
            <li>Präsentation der Ergebnisse der Simulation</li>
            <li>Ergebnisse der Berechnungen</li>
            <li>Vergleich der Ergebnisse der Simulation mit den Ergebnissen der Berechnung</li>
        </ul>
    </Task>


</TaskList>