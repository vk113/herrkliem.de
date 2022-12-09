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
	import Katex from "$lib/Katex.svelte";
    setContext("color", "teal")
</script>
    

<Headline src="/efron.png" title="Efrons Würfel" color="teal"/>
<TaskList>
    <Task title="Einstieg">
        <YouTubeFrame id="y0_DEvRL5Xg" />
    </Task>

    <Task i="1" title="Realsimulation">
        <MaterialList title="Materialien:">
            <ul class="list-disc ml-5">
                <li>
                 4 Efrons Würfel
                </li>
            </ul>
        </MaterialList>
        Spielt das Spiel gegeneinander. Wechselt ab, wer zuerst den Würfel auswählen darf und notiert die Wahl der Würfel und eure Ergebnisse. Spielt mindestens 20 Runden und stellt anschließend Vermutungen auf, welche Würfel eher gut oder schlecht sind. Notiert, welche Strategie ihr bei der Auswahl der Würfel verfolgt habt.
    </Task>
    <Task i=2 title="Simulation planen">
        <b>Wie kann dieses Problem mithilfe eines Tabellenkalkulationsprogramms simuliert werden?</b> <br/>
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

    </Task>
    <Task i="3-5" title="In Teilgruppen">
        Teilt eure Gruppe auf. <br/>
        Eine Teilgruppe wird für die Simulation in Excel hauptverantwortlich sein. Die zweite Teilgruppe berechnet mithilfe der im Unterricht erlernten Methoden die Gewinnwahrscheinlichkeiten der einzelnen Würfel. <br/>
        <b>
            Je nach Gruppe geht es jetzt für euch hier weiter: 
        </b>
        
        <Choice choices={[{href:"/simulationen/efronswuerfel/simulieren", text:"Simulieren"}, {href:"/simulationen/efronswuerfel/berechnen", text:"Berechnen"}]}/>

    </Task>

    <Task i=6 title="Austausch" id="anchor1">
        Präsentiert jeweils der anderen Teilgruppe eure Ergebnisse. <br/>
        <div class="grid grid-cols-2 gap-x-8 mt-2">
            <div>
                <div class="font-bold">Team Berechnen</div>
                <ol>
                    <li>
                        Erläutert, wie ihr mithilfe der Baumdiagramme die Wahrscheinlichkeiten ermitteln konntet.
                    </li>
                    <li>
                        Baut unter Anleitung des <b>Teams Simulieren</b> die Exceltabelle nach. 
                    </li>
                    
                </ol>
            </div>
            <div>
                <div class="font-bold">Team Simulieren</div>
                <ol>
                    <li>
                        Präsentiert eure Ergebnisse und vergleicht mit den berechneten Wahrscheinlichkeiten.
                    </li>
                    <li>
                        Helft dem <b>Team Berechnen</b> beim Nachbauen der Simulation. (Regel: Finger weg von Maus und Tastatur! 😉)
                    </li>
                    
                </ol>
            </div>
        </div>
            
    </Task>
    <Task i=7 title="Präsentation">
        Bereitet ein 8-10 minütiges Referat vor. <br/>
        <b>Checkliste:</b>
        <ul class="list-disc ml-10">
            <li>Einstieg der Interesse am Thema weckt und das Problem erklärt.</li>
            <li>Beschreibung der Teilschritte der Simulation</li>
            <li>Präsentation der Ergebnisse der Simulation</li>
            <li>Ergebnisse der Berechnungen (exemplarisch anhand eines Würfelpaares, z.B.: A gegen B)</li>
            <li>Vergleich der Ergebnisse der Simulation mit den Ergebnissen der Berechnung</li>
            <li>Präsentation der optimalen Strategie</li>
        </ul>
    </Task>


</TaskList>