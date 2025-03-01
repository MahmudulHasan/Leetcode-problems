<h2><a href="https://leetcode.com/problems/check-if-the-number-is-fascinating/">2729. Check if The Number is Fascinating</a></h2><h3>Easy</h3><hr><div><p>You are given an integer <code style="font-family: monospace, Bangla226, sans-serif;">n</code> that consists of exactly <code style="font-family: monospace, Bangla226, sans-serif;">3</code> digits.</p>

<p>We call the number <code style="font-family: monospace, Bangla226, sans-serif;">n</code> <strong>fascinating</strong> if, after the following modification, the resulting number contains all the digits from <code style="font-family: monospace, Bangla226, sans-serif;">1</code> to <code style="font-family: monospace, Bangla226, sans-serif;">9</code> <strong>exactly</strong> once and does not contain any <code style="font-family: monospace, Bangla226, sans-serif;">0</code>'s:</p>

<ul>
	<li><strong>Concatenate</strong> <code style="font-family: monospace, Bangla226, sans-serif;">n</code> with the numbers <code style="font-family: monospace, Bangla226, sans-serif;">2 * n</code> and <code style="font-family: monospace, Bangla226, sans-serif;">3 * n</code>.</li>
</ul>

<p>Return <code style="font-family: monospace, Bangla226, sans-serif;">true</code><em> if </em><code style="font-family: monospace, Bangla226, sans-serif;">n</code><em> is fascinating, or </em><code style="font-family: monospace, Bangla226, sans-serif;">false</code><em> otherwise</em>.</p>

<p><strong>Concatenating</strong> two numbers means joining them together. For example, the concatenation of <code style="font-family: monospace, Bangla226, sans-serif;">121</code> and <code style="font-family: monospace, Bangla226, sans-serif;">371</code> is <code style="font-family: monospace, Bangla226, sans-serif;">121371</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla226, sans-serif;"><strong>Input:</strong> n = 192
<strong>Output:</strong> true
<strong>Explanation:</strong> We concatenate the numbers n = 192 and 2 * n = 384 and 3 * n = 576. The resulting number is 192384576. This number contains all the digits from 1 to 9 exactly once.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla226, sans-serif;"><strong>Input:</strong> n = 100
<strong>Output:</strong> false
<strong>Explanation:</strong> We concatenate the numbers n = 100 and 2 * n = 200 and 3 * n = 300. The resulting number is 100200300. This number does not satisfy any of the conditions.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code style="font-family: monospace, Bangla226, sans-serif;">100 &lt;= n &lt;= 999</code></li>
</ul>
</div>