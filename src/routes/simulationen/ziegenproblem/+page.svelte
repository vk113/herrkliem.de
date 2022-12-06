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
            Gliedert dazu die Simulation in einzelne Teilschritte. Formuliert jedes Teilschritte und notiert Excelfunktionen, die für diesen Schritt hilfreich sind.
            <Help title="Liste mit (verlinkten) Excelfunktionen" isOpen>
                <p class="excel-list">
                    <a href="https://support.microsoft.com/de-de/office/zählenwenn-funktion-e0de10c6-f885-4e71-abb4-1f464816df34">ZÄHLENWENN</a>,
                    <a href="https://support.microsoft.com/de-de/office/zufallsbereich-funktion-4cc7f0d1-87dc-4eb7-987f-a469ab381685">ZUFALLSBEREICH</a>,
                    <a href="https://support.microsoft.com/de-de/office/wenn-funktion-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2">WENN</a>,
                    <a href="https://support.microsoft.com/de-de/office/summe-funktion-043e1c7d-7726-4e80-8f32-07b23e057f89">SUMME</a>,
                    <a href="https://support.microsoft.com/de-de/office/index-funktion-a5dcf0dd-996d-40a4-a822-b56b061328bd">INDEX</a>
                </p>
            </Help>
        </Task>
        <Task i=3 title="Gruppe splitten">
            Teilt eure Gruppe auf! Eine Teilgruppe wird für die Simulation in Excel hauptverantwortlich sein. Die zweite Teilgruppe berechnet mithilfe der im Unterricht erlernten Methoden die Wahrscheinlichkeit der jeweiligen Strategien. <br/>
            Je nach Gruppe geht es jetzt für euch hier weiter: 
            
            <Choice/>

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
    
    .choice {

    }
</style>