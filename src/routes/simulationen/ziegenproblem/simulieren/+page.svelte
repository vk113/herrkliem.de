<script>
    import Headline from "$lib/Headline.svelte";
    import TaskList from '$lib/TaskList.svelte';
    import Task from '$lib/Task.svelte';
    import Help from "$lib/Help.svelte";
    import {setContext} from 'svelte';
	import ExcelDownload from "$lib/ExcelDownload.svelte";
	import Katex from "$lib/Katex.svelte";
    setContext("color", "green")
</script>

<Headline back="/simulationen/ziegenproblem#anchor1" src="/ziegenproblem.png" title="Ziegenproblem | Simulation"/>
<TaskList>
    <Task i="3A" title="Simulation eines Durchgangs">
        Simuliere einen Durchgang mit beiden Strategien. Dabei sollte die Position des Autos als auch die erste Wahl des Kandidatens zufällig sein. Evaluiert jeweils automatisch, ob die Strategie gewinnt. <br/>
        <Help title="Excel Vorlage">
            Du <i>kannst</i> für die Simulation die folgende Excelvorlage verwenden:
            <div class="w-full">
                <ExcelDownload filename="Vorlage Ziegenproblem" href="/vorlagen/ziegenproblem_vorlage.xlsx"/>
            </div>
        </Help>
        <Help title="Wie kann ich herausfinden, welche Türe der Moderator öffnen muss?">
            <b>Tipp:</b> Mache eine Fallunterscheidung. Ist hinter der Tür der 1. Wahl eine Ziege oder nicht?
        </Help>
        <Help title="<b>Trick:</b> Wie finde ich die richtige Tür bei der Strategie wechseln?">
            Um eine relativ aufwendige Fallunterscheidung zu verhindern, gibt es einen Trick: <br/>
            Bildet man die Summe der drei Türnummern, so erhält man: 
            <Katex eq="1+2+3=6"/><br>
            Bei der Strategie <cite>wechseln</cite> sind am Ende alle Türen offen. Wir wissen also: <br/>
            <Katex eq="\text{'{'}Türnummer 1.Wahl} + \text{'{'}Türnummer Moderator}  + \text{'{'}Türnummer 2.Wahl} =6"/>
        </Help>
    </Task>
    <Task i="4A" title="Simulation von 1000 Durchgängen">
        <ol >
            <li>
                Führt die Simolation 1000 Mal durch und wertet die Simulation aus, indem ihr zählt, wie oft welche Strategie erfolgreich war.
            </li>
            <li>
                Stellt die Auswertung in aussagekräftigen Diagrammen dar.
            </li>
            <li>
                Stellt eine Vermutung auf: Mit welcher Wahrscheinlichkeit gewinnt man bei der Strategie <cite>wechseln</cite> / <cite>bleiben</cite> ?
            </li>
        </ol>
    </Task>

    <Task bonus i="5B" title="Gesetz der Großen Zahlen">
        Führt die Auswertung für 10, 50, 100, 200, 300, 400, ... 1000 Spiele durch. Stellt die Veränderung der relativen Häufigkeit in einem Liniendiagramm dar. 
    </Task>
    
</TaskList>
