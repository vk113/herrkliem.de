<script>
    import Headline from "$lib/Headline.svelte";
    import Task from "$lib/Task.svelte";
    import TaskList from "$lib/TaskList.svelte";
    import { setContext } from "svelte";
    import YouTubeFrame from "$lib/YouTubeFrame.svelte";
    import Help from "$lib/Help.svelte";
    import MaterialList from "$lib/MaterialList.svelte";
    import Katex from "$lib/Katex.svelte";
    import Choice from "$lib/Choice.svelte";
    import Solution from "$lib/Solution.svelte";
    setContext("color", "blue");
</script>


<Headline src="/vertauschte_briefe.png" title="Wichteln" color="blue"/>
<TaskList>
    <Task src="/vertauschte_briefe.png" title="Einstieg">
        <YouTubeFrame id="KDMh785O6Jg"/>
    </Task>
    <Task title="Realsimulation" i=1>
        <MaterialList title="Materialien:">
            <ul class="list-disc ml-5">
                <li>
                    5 Namenszettel 
                </li>
            </ul>
        </MaterialList>
        Spielt das Wichteln in eurer Gruppe mindestens 10 mal durch. <br/>
        Notiert jeweils, wie viele Gruppenmitglieder ihren eigenen Zettel gezogen haben.
        <Help title="Tabellenvorlage" isOpen>
            <table>
                <tr>
                    <th>Durchgang <Katex eq="n" />
                    </th>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>...</td>
                </tr>
                <tr>
                    <th>
                        Anzahl eigener Zettel
                    </th>
                    <td>...</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

            </table>
        </Help>
        </Task>
        <Task i=2 title="Simulation planen">
            <b>Wie kann  dieses Problem mithilfe eines Tabellenkalkulationsprogramms simuliert werden?</b> <br/>
            Gliedert dazu die Simulation in einzelne Teilschritte. Formuliert jeden Teilschritt und notiert Excelfunktionen, die für diesen Schritt hilfreich sind.
            <Help title="Liste mit (verlinkten) Excelfunktionen" >
                <p class="excel-list">
                    <a href="https://support.microsoft.com/de-de/office/zählenwenn-funktion-e0de10c6-f885-4e71-abb4-1f464816df34">ZÄHLENWENN</a>,
                    <a href="https://support.microsoft.com/de-de/office/zufallsbereich-funktion-4cc7f0d1-87dc-4eb7-987f-a469ab381685">ZUFALLSBEREICH</a>,
                    <a href="https://support.microsoft.com/de-de/office/zufallszahl-funktion-4cbfa695-8869-4788-8d90-021ea9f5be73">ZUFALLSZAHL</a>,
                    <a href="https://support.microsoft.com/de-de/office/wenn-funktion-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2">WENN</a>,
                    <a href="https://support.microsoft.com/de-de/office/summe-funktion-043e1c7d-7726-4e80-8f32-07b23e057f89">SUMME</a>,
                    <a href="https://support.microsoft.com/de-de/office/index-funktion-a5dcf0dd-996d-40a4-a822-b56b061328bd">INDEX</a>,
                    <a href="https://support.microsoft.com/de-de/office/sortierennach-funktion-cd2d7a62-1b93-435c-b561-d6a35134f28f">SORTIERENNACH</a>
                </p>
            </Help>
        </Task>
        <Task i="3-5" title="In Teilgruppen">
            Teilt eure Gruppe auf. <br/>
            Eine Teilgruppe wird für die Simulation in Excel hauptverantwortlich sein. Die zweite Teilgruppe berechnet mithilfe der im Unterricht erlernten Methoden die Wahrscheinlichkeit der jeweiligen Strategien. <br/>
            <b>
                Je nach Gruppe geht es jetzt für euch hier weiter: 
            </b>
            
            <Choice choices={[{href:"/simulationen/wichteln/simulieren", text:"Simulieren"}, {href:"/simulationen/wichteln/berechnen", text:"Berechnen"}]}/>

        </Task>

        <Task i=6 title="Austausch" id="anchor1">
            Präsentiert jeweils der anderen Teilgruppe eure Vorgehensweise und eure Ergebnisse.<br/>
            Diskutiert dabei, welche Vor- und Nachteile die beiden Methoden haben. Befasst euch dabei vor allem mit folgenden Fragen:<br/>
            <ul class="list-disc ml-10">
                <li>
                    Welche Methode ist genauer?
                </li>
                <li>
                    Warum kann mit Methode <cite>Berechnen</cite> die Wahrscheinlichkeit bei 20 Wichteln kaum berechnet werden?
                </li>
            </ul>            
        </Task>
        <Task i=7 title="Präsentation">
            Bereitet ein 8-minütiges Referat vor. <br/>
            <b>Checkliste:</b>
            <ul class="list-disc ml-10">
                <li>Einstieg der Interesse am Thema weckt und die Situation erklärt</li>
                <li>Beschreibung der Teilschritte der Simulation</li>
                <li>Präsentation der Ergebnisse der Simulation</li>
                <li>Herleitung der Wahrscheinlichkeit mithilfe aller Kombinationen</li>
                <li>Vor- und Nachteile beider Herangehensweisen</li>
                <li>Vergleich: fünf Wichtel vs. 20 Wichtel</li>
            </ul>
        </Task>
</TaskList>


<style lang="postcss">
    td{
        @apply border-black border p-1 w-12 text-center;
    }
    th{
        @apply border-black border p-1;
    }
    .excel-list a{
        @apply text-blue-600;
    }

    .excel-list a:hover{
        @apply underline;
    }
    
</style>