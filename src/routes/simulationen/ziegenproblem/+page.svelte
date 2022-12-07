<script>
    import Headline from "$lib/Headline.svelte";
    import Task from "$lib/Task.svelte";
    import TaskList from "$lib/TaskList.svelte";
    import YouTubeFrame from "$lib/YouTubeFrame.svelte";
    import MaterialList from "$lib/MaterialList.svelte";
    import Help from "$lib/Help.svelte";
    import RoleList from "$lib/RoleList.svelte";
    import Choice from "$lib/Choice.svelte";
    import { setContext } from 'svelte';
    import Katex from '$lib/Katex.svelte';

    setContext("color", "green");
</script>


<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css" integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC" crossorigin="anonymous">
  </svelte:head>
<Headline src="/ziegenproblem.png" title="Ziegenproblem"  />
<TaskList>    
    <Task title="Einstieg">
        <YouTubeFrame id="wk6KxrD1q_E"/>
    </Task>
    
    <Task title="Realsimulation" i=1>
        <MaterialList title="Materialien:">
            <ul class="list-disc ml-5">
                <li>
                    3 Streichholzschachteln 
                </li>
                <li>
                    2 Ziegenkarten 
                </li>
                <li>
                    1 Autokarte 
                </li>
            </ul>
        </MaterialList>
        <RoleList title="Rollen:">
            <ul class="list-disc ml-5">
                <li>
                    Moderator*in
                </li>
                <li>
                    Kandidat*in 
                </li>
                <li>
                    Protokollant*in 
                </li>
            </ul>
        </RoleList>
        Spielt das Spiel aus der Fernsehshow mindestens 10 mal nach. <br/>
        Tauscht die Rollen einmal durch und protokolliert jeweils, welche Entscheidungen von den Kandidat*innen getroffen wurden.
        Analysiert eure Ergebnisse und gebt eine Vermutung ab, ob und welche Strategie vorteilhaft ist.
        <Help title="Tabellenvorlage">
            <table>
                <tr>
                    <th>Spiel <Katex eq="n" />
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
                        Strategie
                    </th>
                    <td>wechseln</td>
                    <td>...</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>
                        Gewonnen
                    </th>
                    <td>nein</td>
                    <td><div class=""></div></td>
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
                    <a href="https://support.microsoft.com/de-de/office/wenn-funktion-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2">WENN</a>,
                    <a href="https://support.microsoft.com/de-de/office/summe-funktion-043e1c7d-7726-4e80-8f32-07b23e057f89">SUMME</a>,
                    <a href="https://support.microsoft.com/de-de/office/index-funktion-a5dcf0dd-996d-40a4-a822-b56b061328bd">INDEX</a>
                </p>
            </Help>
        </Task>
        <Task i="3-5" title="In Teilgruppen">
            Teilt eure Gruppe auf. <br/>
            Eine Teilgruppe wird für die Simulation in Excel hauptverantwortlich sein. Die zweite Teilgruppe berechnet mithilfe der im Unterricht erlernten Methoden die Wahrscheinlichkeit der jeweiligen Strategien. <br/>
            <b>
                Je nach Gruppe geht es jetzt für euch hier weiter: 
            </b>
            
            <Choice/>

        </Task>

        <Task i=6 title="Austausch" id="anchor1">
            Präsentiert jeweils der anderen Teilgruppe eure Ergebnisse. <br/>
            <div class="grid grid-cols-2 gap-x-8 mt-2">
                <div>
                    <div class="font-bold">Team Berechnen</div>
                    <ol>
                        <li>
                            Präsentiert eure Ergebnisse. Achtet dabei darauf, dass eure Gedankenschritte nachvollziehbar sind und geht auf Rückfragen ein.
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
            Bereitet ein 8-minütiges Referat vor. <br/>
            <b>Checkliste:</b>
            <ul class="list-disc ml-10">
                <li>Einstieg der Interesse am Thema weckt und das Spiel erklärt.</li>
                <li>Beschreibung der Teilschritte der Simulation</li>
                <li>Präsentation der Ergebnisse der Simulation</li>
                <li>Rechnerische Herleitung der Wahrscheinlichkeiten anhand der Baumdiagramme</li>
                <li>Vergleich der Ergebnisse der Simulation mit der Berechnung</li>
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
</style>