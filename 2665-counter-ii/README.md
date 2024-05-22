<h2><a href="https://leetcode.com/problems/counter-ii/">2665. Counter II</a></h2><h3>Easy</h3><hr><div><p>Write a function&nbsp;<code style="font-family: monospace, Bangla828, sans-serif;">createCounter</code>. It should accept an initial integer&nbsp;<code style="font-family: monospace, Bangla828, sans-serif;">init</code>. It should return an object with three functions.</p>

<p>The three functions are:</p>

<ul>
	<li><code style="font-family: monospace, Bangla828, sans-serif;">increment()</code>&nbsp;increases&nbsp;the current value by 1 and then returns it.</li>
	<li><code style="font-family: monospace, Bangla828, sans-serif;">decrement()</code>&nbsp;reduces the current value by 1 and then returns it.</li>
	<li><code style="font-family: monospace, Bangla828, sans-serif;">reset()</code>&nbsp;sets the current value to&nbsp;<code style="font-family: monospace, Bangla828, sans-serif;">init</code>&nbsp;and then returns it.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla828, sans-serif;"><strong>Input:</strong> init = 5, calls = ["increment","reset","decrement"]
<strong>Output:</strong> [6,5,4]
<strong>Explanation:</strong>
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla828, sans-serif;"><strong>Input:</strong> init = 0, calls = ["increment","increment","decrement","reset","reset"]
<strong>Output:</strong> [1,2,1,0,0]
<strong>Explanation:</strong>
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code style="font-family: monospace, Bangla828, sans-serif;">-1000 &lt;= init &lt;= 1000</code></li>
	<li><code style="font-family: monospace, Bangla828, sans-serif;">0 &lt;= calls.length &lt;= 1000</code></li>
	<li><code style="font-family: monospace, Bangla828, sans-serif;">calls[i]</code> is one of "increment", "decrement" and&nbsp;"reset"</li>
</ul>
</div>