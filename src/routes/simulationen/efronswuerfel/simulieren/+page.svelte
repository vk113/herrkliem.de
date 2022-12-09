<script>
    import Headline from "$lib/Headline.svelte";
    import TaskList from '$lib/TaskList.svelte';
    import Task from '$lib/Task.svelte';
    import Help from "$lib/Help.svelte";
    import {setContext} from 'svelte';
	import ExcelDownload from "$lib/ExcelDownload.svelte";
	import Katex from "$lib/Katex.svelte";
    setContext("color", "teal")
</script>

<Headline back="/simulationen/efronswuerfel#anchor1" src="/efron.png" title="Efrons Würfel | Simulation"/>
<TaskList>
    <Task i="3A" title="Simulation eines Würfelwurfs">
        Computersimulationen helfen uns Dinge schneller zu simulieren. Dies können wir hier auch nutzen und alle Würfel auf einmal gegeneinander antreten lassen.
        <ol>
            <li>
                Implementiert für jeden der vier Würfel eine Funktion, die den zufälligen Wurf mit diesem Würfel simuliert.
                <Help title="Excel Vorlage">
                    Du <i>kannst</i> für die Simulation die folgende Excelvorlage verwenden:
                    <div class="w-full">
                        <ExcelDownload filename="Vorlage Efronswürfel" href="/vorlagen/efronswuerfel_vorlage.xlsx"/>
                    </div>
                </Help>
                <Help title="Wie kann man einen Würfelwurf simulieren?">
                    Das ist hier nicht so einfach, denn die Funktion <a href="https://support.microsoft.com/de-de/office/zufallsbereich-funktion-4cc7f0d1-87dc-4eb7-987f-a469ab381685">ZUFALLSBEREICH(1;6)</a> funktioniert nur bei einem normalen Würfelwurf. <br/>
                    <b>Es gibt zwei Möglichkeiten:</b><br/>
                    <ul class="ml-10 list-disc">
                        <li>
                            Man legt für jeden Würfel eine Liste an und wählt dann zufällig aus dieser Liste aus. Dies funktioniert mit einer Kombination aus den Funktionen
                            <a class="a" href="https://support.microsoft.com/de-de/office/zufallsbereich-funktion-4cc7f0d1-87dc-4eb7-987f-a469ab381685">ZUFALLSBEREICH</a> 
                            und 
                            <a class="a" href="https://support.microsoft.com/de-de/office/index-funktion-a5dcf0dd-996d-40a4-a822-b56b061328bd">INDEX</a>
                        </li>
                        <li>
                            Man ermittelt für jeden Würfel die Wahrscheinlichkeiten für die unterschiedlichen Ergebnisse. Anschließend generiert man für jeden Würfelwurf eine 
                            <a class="a" href="https://support.microsoft.com/de-de/office/zufallszahl-funktion-4cbfa695-8869-4788-8d90-021ea9f5be73">ZUFALLSZAHL</a>. 
                            Würfelt man beispielsweise mit einer Wahrscheinlichkeit von <Katex eq="30\%"/> eine fünf, so lässt sich dies simulieren, indem man prüft, ob die Zufallszahl kleiner als <Katex eq="0,3"/> ist.
                            
                        </li>
                    </ul>
                </Help>
            </li>
            <li>
                Entscheidet für jede mögliche Kombination, welcher Würfel gewinnt.
            </li>
        </ol>
    </Task>
    <Task i="4A" title="Simulation von 1000 Runden">
        <ol>
            <li>
                Führt die Simulation 1000 mal durch und wertet die Simulation aus, indem ihr zählt, wie oft welcher Würfel gegen welchen gewonnen hat.
            </li>
            <li>
                Stellt eure Ergebnisse in einer übersichtlichen Tabelle dar. (Tipp: <a class="a" href="https://support.microsoft.com/de-de/office/verwenden-von-bedingter-formatierung-zum-hervorheben-von-informationen-fed60dfa-1d3f-4e13-9ecb-f1951ff89d7f">Bedingte Formatierung</a>)
            </li>
        </ol>
    </Task>

    <Task  i="5B" title="Strategie">
        Formuliert die bestmögliche Strategie für Bob, wenn Alice anfängt.
    </Task>
    
</TaskList>
