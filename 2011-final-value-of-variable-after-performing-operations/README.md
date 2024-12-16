<h2><a href="https://leetcode.com/problems/final-value-of-variable-after-performing-operations/">2011. Final Value of Variable After Performing Operations</a></h2><h3>Easy</h3><hr><div><p>There is a programming language with only <strong>four</strong> operations and <strong>one</strong> variable <code style="font-family: monospace, Bangla619, sans-serif;">X</code>:</p>

<ul>
	<li><code style="font-family: monospace, Bangla619, sans-serif;">++X</code> and <code style="font-family: monospace, Bangla619, sans-serif;">X++</code> <strong>increments</strong> the value of the variable <code style="font-family: monospace, Bangla619, sans-serif;">X</code> by <code style="font-family: monospace, Bangla619, sans-serif;">1</code>.</li>
	<li><code style="font-family: monospace, Bangla619, sans-serif;">--X</code> and <code style="font-family: monospace, Bangla619, sans-serif;">X--</code> <strong>decrements</strong> the value of the variable <code style="font-family: monospace, Bangla619, sans-serif;">X</code> by <code style="font-family: monospace, Bangla619, sans-serif;">1</code>.</li>
</ul>

<p>Initially, the value of <code style="font-family: monospace, Bangla619, sans-serif;">X</code> is <code style="font-family: monospace, Bangla619, sans-serif;">0</code>.</p>

<p>Given an array of strings <code style="font-family: monospace, Bangla619, sans-serif;">operations</code> containing a list of operations, return <em>the <strong>final </strong>value of </em><code style="font-family: monospace, Bangla619, sans-serif;">X</code> <em>after performing all the operations</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla619, sans-serif;"><strong>Input:</strong> operations = ["--X","X++","X++"]
<strong>Output:</strong> 1
<strong>Explanation:</strong>&nbsp;The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla619, sans-serif;"><strong>Input:</strong> operations = ["++X","++X","X++"]
<strong>Output:</strong> 3
<strong>Explanation: </strong>The operations are performed as follows:
Initially, X = 0.
++X: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
X++: X is incremented by 1, X = 2 + 1 = 3.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla619, sans-serif;"><strong>Input:</strong> operations = ["X++","++X","--X","X--"]
<strong>Output:</strong> 0
<strong>Explanation:</strong>&nbsp;The operations are performed as follows:
Initially, X = 0.
X++: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
--X: X is decremented by 1, X = 2 - 1 = 1.
X--: X is decremented by 1, X = 1 - 1 = 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code style="font-family: monospace, Bangla619, sans-serif;">1 &lt;= operations.length &lt;= 100</code></li>
	<li><code style="font-family: monospace, Bangla619, sans-serif;">operations[i]</code> will be either <code style="font-family: monospace, Bangla619, sans-serif;">"++X"</code>, <code style="font-family: monospace, Bangla619, sans-serif;">"X++"</code>, <code style="font-family: monospace, Bangla619, sans-serif;">"--X"</code>, or <code style="font-family: monospace, Bangla619, sans-serif;">"X--"</code>.</li>
</ul>
</div>