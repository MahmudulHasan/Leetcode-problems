<h2><a href="https://leetcode.com/problems/number-of-employees-who-met-the-target/">2798. Number of Employees Who Met the Target</a></h2><h3>Easy</h3><hr><div><p>There are <code style="font-family: monospace, Bangla515, sans-serif;">n</code> employees in a company, numbered from <code style="font-family: monospace, Bangla515, sans-serif;">0</code> to <code style="font-family: monospace, Bangla515, sans-serif;">n - 1</code>. Each employee <code style="font-family: monospace, Bangla515, sans-serif;">i</code> has worked for <code style="font-family: monospace, Bangla515, sans-serif;">hours[i]</code> hours in the company.</p>

<p>The company requires each employee to work for <strong>at least</strong> <code style="font-family: monospace, Bangla515, sans-serif;">target</code> hours.</p>

<p>You are given a <strong>0-indexed</strong> array of non-negative integers <code style="font-family: monospace, Bangla515, sans-serif;">hours</code> of length <code style="font-family: monospace, Bangla515, sans-serif;">n</code> and a non-negative integer <code style="font-family: monospace, Bangla515, sans-serif;">target</code>.</p>

<p>Return <em>the integer denoting the number of employees who worked at least</em> <code style="font-family: monospace, Bangla515, sans-serif;">target</code> <em>hours</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla515, sans-serif;"><strong>Input:</strong> hours = [0,1,2,3,4], target = 2
<strong>Output:</strong> 3
<strong>Explanation:</strong> The company wants each employee to work for at least 2 hours.
- Employee 0 worked for 0 hours and didn't meet the target.
- Employee 1 worked for 1 hours and didn't meet the target.
- Employee 2 worked for 2 hours and met the target.
- Employee 3 worked for 3 hours and met the target.
- Employee 4 worked for 4 hours and met the target.
There are 3 employees who met the target.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla515, sans-serif;"><strong>Input:</strong> hours = [5,1,4,2,2], target = 6
<strong>Output:</strong> 0
<strong>Explanation:</strong> The company wants each employee to work for at least 6 hours.
There are 0 employees who met the target.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code style="font-family: monospace, Bangla515, sans-serif;">1 &lt;= n == hours.length &lt;= 50</code></li>
	<li><code style="font-family: monospace, Bangla515, sans-serif;">0 &lt;=&nbsp;hours[i], target &lt;= 10<sup>5</sup></code></li>
</ul>
</div>