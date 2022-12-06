<script>
    import Headline from "$lib/Headline.svelte";
    import Task from "$lib/Task.svelte";
    import TaskList from "$lib/TaskList.svelte";
    import YouTubeFrame from "$lib/YouTubeFrame.svelte";
</script>


<Headline src="/efron.png" title="Efrons Würfel" color="teal"/>
<TaskList>
    <Task  title="Aufgabe 1">
        <YouTubeFrame id="y0_DEvRL5Xg" />
        Die fünf Freunde Alice, Bob, Christian, David und Eva möchten zu Weihnachten gerne Wichteln. Dazu schreibt jeder seinen Namen auf einen Zettel
    </Task>
</TaskList>