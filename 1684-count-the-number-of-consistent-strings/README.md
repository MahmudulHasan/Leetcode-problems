<h2><a href="https://leetcode.com/problems/count-the-number-of-consistent-strings/">1684. Count the Number of Consistent Strings</a></h2><h3>Easy</h3><hr><div><p>You are given a string <code style="font-family: monospace, Bangla865, sans-serif;">allowed</code> consisting of <strong>distinct</strong> characters and an array of strings <code style="font-family: monospace, Bangla865, sans-serif;">words</code>. A string is <strong>consistent </strong>if all characters in the string appear in the string <code style="font-family: monospace, Bangla865, sans-serif;">allowed</code>.</p>

<p>Return<em> the number of <strong>consistent</strong> strings in the array </em><code style="font-family: monospace, Bangla865, sans-serif;">words</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla865, sans-serif;"><strong>Input:</strong> allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
<strong>Output:</strong> 2
<strong>Explanation:</strong> Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla865, sans-serif;"><strong>Input:</strong> allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
<strong>Output:</strong> 7
<strong>Explanation:</strong> All strings are consistent.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla865, sans-serif;"><strong>Input:</strong> allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Strings "cc", "acd", "ac", and "d" are consistent.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code style="font-family: monospace, Bangla865, sans-serif;">1 &lt;= words.length &lt;= 10<sup>4</sup></code></li>
	<li><code style="font-family: monospace, Bangla865, sans-serif;">1 &lt;= allowed.length &lt;=<sup> </sup>26</code></li>
	<li><code style="font-family: monospace, Bangla865, sans-serif;">1 &lt;= words[i].length &lt;= 10</code></li>
	<li>The characters in <code style="font-family: monospace, Bangla865, sans-serif;">allowed</code> are <strong>distinct</strong>.</li>
	<li><code style="font-family: monospace, Bangla865, sans-serif;">words[i]</code> and <code style="font-family: monospace, Bangla865, sans-serif;">allowed</code> contain only lowercase English letters.</li>
</ul>
</div>