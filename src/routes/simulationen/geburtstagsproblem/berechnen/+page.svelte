<script>
    import Headline from "$lib/Headline.svelte";
    import TaskList from '$lib/TaskList.svelte';
    import Katex from "$lib/Katex.svelte";
    import Task from '$lib/Task.svelte';
    import Solution from '$lib/Solution.svelte';
    import Help from '$lib/Help.svelte';
    import {setContext} from 'svelte';
	import ExcelDownload from "$lib/ExcelDownload.svelte";
    setContext("color", "pink")
</script>
<Headline back="/simulationen/geburtstagsproblem#anchor1" src="/geburtstagsproblem.png" title="Geburtstagsproblem | Berechnung"/>
<TaskList>
    <Task i="3B" title="Herleitung der Wahrscheinlichkeit">
        Im folgenden betrachten wir das Ereignis <Katex eq="A:"/> <q class="italic">Mindestens zwei Schüler*innen haben am selben Tag Geburtstag.</q>
        <ol>
            <li>
                Formuliere ein passendes Urnenmodell zum Geburtstagsproblem. 
            </li>
            <li>
                Beschreibe, wie sich das Gegenereignis nutzen lässt, um die Wahrscheinlichkeit <Katex eq="p(A)"/> umzuformulieren.
            </li>
            <li>
                Berechne die Wahrscheinlichkeit <Katex eq="p(A)"/> in einer Gruppe von fünf Schüler*innen.
            </li>
        </ol>
    </Task>
    <Task i="4B" title="Allgemeine Lösung des Geburtstagsproblems">
        Es soll eine allgemeine Formel für die Wahrscheinlichkeit <Katex eq="p(A)"/> Schüler*innen hergleitet werden. Geht dabei wie folgt vor: 
        <ol>
            <li>
                Recherchiert, was man in der Mathematik unter Fakultät versteht und berechnet <Katex eq="6!"/>
            </li>
            <li>
                Begründet, dass folgende Gleichung gilt: <Katex eq="365\cdot364\cdot363\cdot362\cdot361\cdot360 = \frac{"{"}365!{"}{359!}"}"/>
            </li>
            <li>
                Leitet eine allgemeine Formel für die Wahrscheinlichkeit  <Katex eq="p(A)"/> in einer Gruppe mit <Katex eq="n"/> Schüler*innen her.
            </li>
        </ol>
    </Task>
    <Task i="5B" title="Berechnung der Wahrscheinlichkeiten für unterschiedliche Gruppengrößen">
        <ol>
            <li>
                Nutzt die in <span class="text-pink-700 font-bold">4B c.</span> hergeleitete Formel zur Berechnung der Wahrscheinlichkeit bei verschiedenen Gruppengrößen. Ladet euch dazu folgende Vorlage herunter: 
                <ExcelDownload filename="Vorlage Geburtstagsproblem Berechnung"/>
            </li>
            <li>
                Erstellt ein Diagramm, welches die Wahrscheinlichkeit in Abhängigkeit der Gruppengröße darstellt.
            </li>
        </ol>
    </Task>
    
</TaskList>