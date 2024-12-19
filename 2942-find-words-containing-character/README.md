<h2><a href="https://leetcode.com/problems/find-words-containing-character/">2942. Find Words Containing Character</a></h2><h3>Easy</h3><hr><div><p>You are given a <strong>0-indexed</strong> array of strings <code style="font-family: monospace, Bangla565, sans-serif;">words</code> and a character <code style="font-family: monospace, Bangla565, sans-serif;">x</code>.</p>

<p>Return <em>an <strong>array of indices</strong> representing the words that contain the character </em><code style="font-family: monospace, Bangla565, sans-serif;">x</code>.</p>

<p><strong>Note</strong> that the returned array may be in <strong>any</strong> order.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla565, sans-serif;"><strong>Input:</strong> words = ["leet","code"], x = "e"
<strong>Output:</strong> [0,1]
<strong>Explanation:</strong> "e" occurs in both words: "l<strong><u>ee</u></strong>t", and "cod<u><strong>e</strong></u>". Hence, we return indices 0 and 1.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla565, sans-serif;"><strong>Input:</strong> words = ["abc","bcd","aaaa","cbc"], x = "a"
<strong>Output:</strong> [0,2]
<strong>Explanation:</strong> "a" occurs in "<strong><u>a</u></strong>bc", and "<u><strong>aaaa</strong></u>". Hence, we return indices 0 and 2.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla565, sans-serif;"><strong>Input:</strong> words = ["abc","bcd","aaaa","cbc"], x = "z"
<strong>Output:</strong> []
<strong>Explanation:</strong> "z" does not occur in any of the words. Hence, we return an empty array.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code style="font-family: monospace, Bangla565, sans-serif;">1 &lt;= words.length &lt;= 50</code></li>
	<li><code style="font-family: monospace, Bangla565, sans-serif;">1 &lt;= words[i].length &lt;= 50</code></li>
	<li><code style="font-family: monospace, Bangla565, sans-serif;">x</code> is a lowercase English letter.</li>
	<li><code style="font-family: monospace, Bangla565, sans-serif;">words[i]</code> consists only of lowercase English letters.</li>
</ul>
</div>