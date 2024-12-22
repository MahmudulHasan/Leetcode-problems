<h2><a href="https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/">2894. Divisible and Non-divisible Sums Difference</a></h2><h3>Easy</h3><hr><div><p>You are given positive integers <code style="font-family: monospace, Bangla226, sans-serif;">n</code> and <code style="font-family: monospace, Bangla226, sans-serif;">m</code>.</p>

<p>Define two integers as follows:</p>

<ul>
	<li><code style="font-family: monospace, Bangla226, sans-serif;">num1</code>: The sum of all integers in the range <code style="font-family: monospace, Bangla226, sans-serif;">[1, n]</code> (both <strong>inclusive</strong>) that are <strong>not divisible</strong> by <code style="font-family: monospace, Bangla226, sans-serif;">m</code>.</li>
	<li><code style="font-family: monospace, Bangla226, sans-serif;">num2</code>: The sum of all integers in the range <code style="font-family: monospace, Bangla226, sans-serif;">[1, n]</code> (both <strong>inclusive</strong>) that are <strong>divisible</strong> by <code style="font-family: monospace, Bangla226, sans-serif;">m</code>.</li>
</ul>

<p>Return <em>the integer</em> <code style="font-family: monospace, Bangla226, sans-serif;">num1 - num2</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla226, sans-serif;"><strong>Input:</strong> n = 10, m = 3
<strong>Output:</strong> 19
<strong>Explanation:</strong> In the given example:
- Integers in the range [1, 10] that are not divisible by 3 are [1,2,4,5,7,8,10], num1 is the sum of those integers = 37.
- Integers in the range [1, 10] that are divisible by 3 are [3,6,9], num2 is the sum of those integers = 18.
We return 37 - 18 = 19 as the answer.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla226, sans-serif;"><strong>Input:</strong> n = 5, m = 6
<strong>Output:</strong> 15
<strong>Explanation:</strong> In the given example:
- Integers in the range [1, 5] that are not divisible by 6 are [1,2,3,4,5], num1 is the sum of those integers = 15.
- Integers in the range [1, 5] that are divisible by 6 are [], num2 is the sum of those integers = 0.
We return 15 - 0 = 15 as the answer.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla226, sans-serif;"><strong>Input:</strong> n = 5, m = 1
<strong>Output:</strong> -15
<strong>Explanation:</strong> In the given example:
- Integers in the range [1, 5] that are not divisible by 1 are [], num1 is the sum of those integers = 0.
- Integers in the range [1, 5] that are divisible by 1 are [1,2,3,4,5], num2 is the sum of those integers = 15.
We return 0 - 15 = -15 as the answer.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code style="font-family: monospace, Bangla226, sans-serif;">1 &lt;= n, m &lt;= 1000</code></li>
</ul>
</div>