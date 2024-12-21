<h2><a href="https://leetcode.com/problems/find-the-maximum-achievable-number/">2769. Find the Maximum Achievable Number</a></h2><h3>Easy</h3><hr><div><p>Given two integers, <code style="font-family: monospace, Bangla728, sans-serif;">num</code> and <code style="font-family: monospace, Bangla728, sans-serif;">t</code>. A <strong>number is achievable</strong> if it can become equal to <code style="font-family: monospace, Bangla728, sans-serif;">num</code> after applying the following operation:</p>

<ul>
	<li>Increase or decrease the number by <code style="font-family: monospace, Bangla728, sans-serif;">1</code>, and simultaneously increase or decrease <code style="font-family: monospace, Bangla728, sans-serif;">num</code> by <code style="font-family: monospace, Bangla728, sans-serif;">1</code>.</li>
</ul>

<p>Return the <strong>maximum achievable number</strong> after applying the operation at most <code style="font-family: monospace, Bangla728, sans-serif;">t</code> times.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io" style="font-family: Menlo, Bangla728, sans-serif;">num = 4, t = 1</span></p>

<p><strong>Output:</strong> <span class="example-io" style="font-family: Menlo, Bangla728, sans-serif;">6</span></p>

<p><strong>Explanation:</strong></p>

<p>Apply the following operation once to make the maximum achievable number equal to <code style="font-family: monospace, Bangla728, sans-serif;">num</code>:</p>

<ul>
	<li>Decrease the maximum achievable number by 1, and increase <code style="font-family: monospace, Bangla728, sans-serif;">num</code> by 1.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io" style="font-family: Menlo, Bangla728, sans-serif;">num = 3, t = 2</span></p>

<p><strong>Output:</strong> <span class="example-io" style="font-family: Menlo, Bangla728, sans-serif;">7</span></p>

<p><strong>Explanation:</strong></p>

<p>Apply the following operation twice to make the maximum achievable number equal to <code style="font-family: monospace, Bangla728, sans-serif;">num</code>:</p>

<ul>
	<li>Decrease the maximum achievable number by 1, and increase <code style="font-family: monospace, Bangla728, sans-serif;">num</code> by 1.</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code style="font-family: monospace, Bangla728, sans-serif;">1 &lt;= num, t&nbsp;&lt;= 50</code></li>
</ul>
</div>