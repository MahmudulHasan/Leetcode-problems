<h2><a href="https://leetcode.com/problems/score-of-a-string/">3110. Score of a String</a></h2><h3>Easy</h3><hr><div><p>You are given a string <code style="font-family: monospace, Bangla396, sans-serif;">s</code>. The <strong>score</strong> of a string is defined as the sum of the absolute difference between the <strong>ASCII</strong> values of adjacent characters.</p>

<p>Return the <strong>score</strong> of<em> </em><code style="font-family: monospace, Bangla396, sans-serif;">s</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io" style="font-family: Menlo, Bangla396, sans-serif;">s = "hello"</span></p>

<p><strong>Output:</strong> <span class="example-io" style="font-family: Menlo, Bangla396, sans-serif;">13</span></p>

<p><strong>Explanation:</strong></p>

<p>The <strong>ASCII</strong> values of the characters in <code style="font-family: monospace, Bangla396, sans-serif;">s</code> are: <code style="font-family: monospace, Bangla396, sans-serif;">'h' = 104</code>, <code style="font-family: monospace, Bangla396, sans-serif;">'e' = 101</code>, <code style="font-family: monospace, Bangla396, sans-serif;">'l' = 108</code>, <code style="font-family: monospace, Bangla396, sans-serif;">'o' = 111</code>. So, the score of <code style="font-family: monospace, Bangla396, sans-serif;">s</code> would be <code style="font-family: monospace, Bangla396, sans-serif;">|104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io" style="font-family: Menlo, Bangla396, sans-serif;">s = "zaz"</span></p>

<p><strong>Output:</strong> <span class="example-io" style="font-family: Menlo, Bangla396, sans-serif;">50</span></p>

<p><strong>Explanation:</strong></p>

<p>The <strong>ASCII</strong> values of the characters in <code style="font-family: monospace, Bangla396, sans-serif;">s</code> are: <code style="font-family: monospace, Bangla396, sans-serif;">'z' = 122</code>, <code style="font-family: monospace, Bangla396, sans-serif;">'a' = 97</code>. So, the score of <code style="font-family: monospace, Bangla396, sans-serif;">s</code> would be <code style="font-family: monospace, Bangla396, sans-serif;">|122 - 97| + |97 - 122| = 25 + 25 = 50</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code style="font-family: monospace, Bangla396, sans-serif;">2 &lt;= s.length &lt;= 100</code></li>
	<li><code style="font-family: monospace, Bangla396, sans-serif;">s</code> consists only of lowercase English letters.</li>
</ul>
</div>