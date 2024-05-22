<h2><a href="https://leetcode.com/problems/counter/">2620. Counter</a></h2><h3>Easy</h3><hr><div><p>Given an integer&nbsp;<code style="font-family: monospace, Bangla353, sans-serif;">n</code>,&nbsp;return a <code style="font-family: monospace, Bangla353, sans-serif;">counter</code> function. This <code style="font-family: monospace, Bangla353, sans-serif;">counter</code> function initially returns&nbsp;<code style="font-family: monospace, Bangla353, sans-serif;">n</code>&nbsp;and then returns 1 more than the previous value every subsequent time it is called (<code style="font-family: monospace, Bangla353, sans-serif;">n</code>, <code style="font-family: monospace, Bangla353, sans-serif;">n + 1</code>, <code style="font-family: monospace, Bangla353, sans-serif;">n + 2</code>, etc).</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla353, sans-serif;"><strong>Input:</strong> 
n = 10 
["call","call","call"]
<strong>Output:</strong> [10,11,12]
<strong>Explanation: 
</strong>counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla353, sans-serif;"><strong>Input:</strong> 
n = -2
["call","call","call","call","call"]
<strong>Output:</strong> [-2,-1,0,1,2]
<strong>Explanation:</strong> counter() initially returns -2. Then increases after each sebsequent call.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code style="font-family: monospace, Bangla353, sans-serif;">-1000<sup>&nbsp;</sup>&lt;= n &lt;= 1000</code></li>
	<li><code style="font-family: monospace, Bangla353, sans-serif;">0 &lt;= calls.length &lt;= 1000</code></li>
	<li><code style="font-family: monospace, Bangla353, sans-serif;">calls[i] === "call"</code></li>
</ul>
</div>