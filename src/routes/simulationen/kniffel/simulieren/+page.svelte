<script>
    import Headline from "$lib/Headline.svelte";
    import TaskList from '$lib/TaskList.svelte';
    import Task from '$lib/Task.svelte';
    import Help from "$lib/Help.svelte";
    import {setContext} from 'svelte';
	import ExcelDownload from "$lib/ExcelDownload.svelte";
	import Katex from "$lib/Katex.svelte";
    setContext("color", "red")
</script>

<Headline back="/simulationen/kniffel#anchor1" src="/kniffel.png" title="Kniffel | Simulation"/>
<TaskList>
    <Task i="3A" title="Der erste Wurf">
        <ol>
            <li>
                Simuliert das Werfen von fünf Würfeln.
                <Help title="Excel Vorlage">
                    Du <i>kannst</i> für die Simulation die folgende Excelvorlage verwenden:
                    <div class="w-full">
                        <ExcelDownload filename="Vorlage Kniffel" href="/vorlagen/kniffel_vorlage.xlsx"/>
                    </div>
                </Help>
        
                <Help title="Wie lässt sich ein einfacher Würfelwurf simulieren?">
                    Nutzt die Funktion <a class="a" href="https://support.microsoft.com/de-de/office/zufallsbereich-funktion-4cc7f0d1-87dc-4eb7-987f-a469ab381685">ZUFALLSBEREICH</a>. 
                </Help>
            </li>
            <li>
                Entscheidet welche Würfel ihr behalten wollt.
                <Help title="Wie kann man entscheiden, welche Würfel behalten werden?">
                    Die Entscheidung lässt sich in folgende Teilprobleme zerlegen: 
                    <ol>
                        <li>
                            Zählt für alle möglichen Augenzahlen von 1 bis 6, wie oft sie vorkommen. Dabei kann die Funktion <a class="a" href="https://support.microsoft.com/de-de/office/zählenwenn-funktion-e0de10c6-f885-4e71-abb4-1f464816df34">ZÄHLENWENN</a> helfen.
                        </li>
                        <li>
                            Ermittelt für jede Augenzahl ob sie die häufigst vorkommende Augenzahl ist.
                        </li>
                        <li>
                            Macht mithilfe der Funktion <a class="a" href="https://support.microsoft.com/de-de/office/wenn-funktion-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2">WENN</a> eine Fallunterscheidung.
                            Prüft nacheinander bei den Augenzahlen 1 bis 6, ob sie am häufigsten vorkommen. Ist dies der Fall, behaltet diese Würfel.
                        </li>
                    </ol>
                </Help>
            </li>
        </ol>
    </Task>
    <Task i="4A" title="Der zweite und dritte Wurf">
        <ol >
            <li>
                Simuliert den zweiten und dritten Wurf. Prüft dabei bei jedem Würfel, ob ihr ihn erneut würfeln müsst.
            </li>
            <li>
                Prüft nach dem dritten Wurf, ob ihr einen Kniffel erreicht habt. 
            </li>
        </ol>
    </Task>
    <Task i="5A" title="Simulation von 1000 Kniffelspielen">
        Simuliert nun 1000 Kniffelspiele und ermittelt einen Schätzwert für die Wahrscheinlichkeit in einem Kniffeldurchgang bei optimaler Strategie einen Kniffel zu erhalten.
    </Task>

</TaskList>
