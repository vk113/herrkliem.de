<script>
    import Headline from "$lib/Headline.svelte";
    import TaskList from '$lib/TaskList.svelte';
    import Katex from "$lib/Katex.svelte";
    import Task from '$lib/Task.svelte';
    import Solution from '$lib/Solution.svelte';
    import Help from '$lib/Help.svelte';
    import {setContext} from 'svelte';
    setContext("color", "green")
</script>
<Headline back="/simulationen/ziegenproblem#anchor1" src="/ziegenproblem.png" title="Ziegenproblem | Simulation"/>
<TaskList>
    <Task i="4B" title="Vereinfachung des Rechenweges">
        <ol>
            <li>
                Zunächst wollen wir unseren Rechenweg etwas vereinfachen. Mathematiker*innen benutzen dafür häufig die Formulierung: <cite>o.B.d.A.</cite>. <br/>
                Recherchiert, was diese Abkürzung bedeutet und wie sie zu verstehen ist. 
            </li>
            <li>
                Sowohl die Position des Autos als auch die Wahl des Kandidaten kann als Laplaceexperiment aufgefasst werden. Dadurch gibt es <Katex eq={"3\\cdot 3= 9"}/> verschiedene Fälle. <br/>
                Überlegt, wie sich die Anzahl der Fälle <cite>o.B.d.A.</cite> sinnvoll reduzieren lässt.
            </li>
            <Solution title="mögliche Lösung">
                Wir können das Problem vereinfachen, indem wir davon ausgehen, dass der Kandidat immer die 1. Tür öffnet, das Auto aber zufällig verteilt ist. <br/>
                Oder anders ausgedrückt: Wir nennen <cite>o.B.d.A.</cite> die Tür, die der Kandidat öffnet Tür 1.
            </Solution>
        </ol>
    </Task>
    <Task i="5B" title="Baumdiagramm">
        Zeichnet für jede der beiden Strategien ein vollständig beschriftetes Baumdiagramm. Die Baumdiagramme sollten nach der Vereinfachung aus <b>Aufgabe 4B</b> alle möglichen Spielausgänge beinhaltet.
        <Help title="Was sind die Stufen des Zufallsexperiments">
            Das Zufallsexperiment besteht aus drei Stufen: 
            <ul class="list-disc ml-10">
                <li>
                    Hinter welcher Tür befindet sich das Auto? 
                </li>
                <li>
                    Welche Tür öffnet der Moderator?
                </li>
                <li>
                    Gewinnt die Strategie <cite>wechseln</cite> bzw. <cite>bleiben</cite>?
                </li>
            </ul>
        </Help>
        <Help title="Was macht der Moderator, wenn der Kandidat schon mit der 1.Wahl das Auto trifft?">
            Ihr könnt davon ausgehen, dass der Moderator dann mit einer Wahrscheinlichkeit von <Katex eq="50\%"/> je eine der beiden verbliebenen Türen öffnet.
        </Help>
    </Task>
    <Task i="6B" title="Wahrscheinlichkeit bestimmen">
        Berechnet nun mithilfe der Baumdiagramme die Wahrscheinlichkeit zu gewinnen.
    </Task>

</TaskList>