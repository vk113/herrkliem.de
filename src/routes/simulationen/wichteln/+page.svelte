<script>
    import Headline from "$lib/Headline.svelte";
    import Task from "$lib/Task.svelte";
    import TaskList from "$lib/TaskList.svelte";
    import YouTubeFrame from "$lib/YouTubeFrame.svelte";
</script>


<Headline src="/vertauschte_briefe.png" title="Wichteln" color="blue"/>
<TaskList>
    <Task src="/vertauschte_briefe.png" title="Einstieg">
        <YouTubeFrame id="KDMh785O6Jg"/>

        <p>

            Die fünf Freunde Alice, Bob, Christian, David und Eva möchten zu Weihnachten gerne Wichteln.
            Dazu schreibt jeder seinen Namen auf einen Zettel, diese werden gemischt und nun von den Freund*innen nacheinander verdeckt gezogen.
        </p>
        <p>
            Wie wahrscheinlich ist es, dass keiner seinen eigenen Zettel zieht? 
        </p>
    </Task>
    <Task src="/vertauschte_briefe.png" title="Aufgabe 1: Realsimulation">
        Probiert es in der Gruppe selbst aus. Schreibt dazu eure Namen auf Zettel und zieht verdeckt. Wiederholt das Ziehen zehn mal und notiert die Ergebnisse. 
    </Task>
    
</TaskList>
    