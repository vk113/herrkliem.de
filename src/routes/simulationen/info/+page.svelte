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


<Headline  title="Info" color="blue"/>
<TaskList>
    <Task title="Aufgabenstellung" i=1>
        <MaterialList title="Materialien:">
            <ul class="list-disc ml-5">
                <li>
                    Material 1 
                </li>
                <li>Material 2</li>
                <li>Material 3</li>
            </ul>
        </MaterialList>
        Dies ist eine Aufgabenstellung mit gestuften Hilfen.
        <Help title="Hilfestellung">
           Wichtig: Erst selbst überlegen und erst dann Hilfestellungen nutzen!
           <Help title="Ich komme noch immer nicht weiter...">
                Dann schau doch mal hier in die Lösung: 
                <Solution title="Lösung">
                    42
                </Solution>
           </Help>
        </Help>

        </Task>

        <Task i="2" title="In Teilgruppen">
            An einer Stelle in der Gruppenarbeit müsst ihr euch noch einmal in Teilgruppen teilen. Wählt dann jeweils euren weiteren Weg hier drunter aus.
            
            <Choice choices={[{href:"/simulationen/wichteln/simulieren", text:"Simulieren"}, {href:"/simulationen/wichteln/berechnen", text:"Berechnen"}]}/>

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