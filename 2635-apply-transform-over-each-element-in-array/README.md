<h2><a href="https://leetcode.com/problems/apply-transform-over-each-element-in-array/">2635. Apply Transform Over Each Element in Array</a></h2><h3>Easy</h3><hr><div><p>Given an integer array&nbsp;<code style="font-family: monospace, Bangla826, sans-serif;">arr</code>&nbsp;and a mapping function&nbsp;<code style="font-family: monospace, Bangla826, sans-serif;">fn</code>, return&nbsp;a new array with a transformation applied to each element.</p>

<p>The returned array should be created such that&nbsp;<code style="font-family: monospace, Bangla826, sans-serif;">returnedArray[i] = fn(arr[i], i)</code>.</p>

<p>Please solve it without the built-in <code style="font-family: monospace, Bangla826, sans-serif;">Array.map</code> method.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla826, sans-serif;"><strong>Input:</strong> arr = [1,2,3], fn = function plusone(n) { return n + 1; }
<strong>Output:</strong> [2,3,4]
<strong>Explanation:</strong>
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla826, sans-serif;"><strong>Input:</strong> arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
<strong>Output:</strong> [1,3,5]
<strong>Explanation:</strong> The function increases each value by the index it resides in.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla826, sans-serif;"><strong>Input:</strong> arr = [10,20,30], fn = function constant() { return 42; }
<strong>Output:</strong> [42,42,42]
<strong>Explanation:</strong> The function always returns 42.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code style="font-family: monospace, Bangla826, sans-serif;">0 &lt;= arr.length &lt;= 1000</code></li>
	<li><code style="font-family: monospace, Bangla826, sans-serif;"><font face="monospace" style="font-family: monospace, Bangla826, sans-serif;">-10<sup>9</sup>&nbsp;&lt;= arr[i] &lt;= 10<sup>9</sup></font></code></li>
	<li><code style="font-family: monospace, Bangla826, sans-serif;">fn</code> returns a number</li>
</ul>
</div>