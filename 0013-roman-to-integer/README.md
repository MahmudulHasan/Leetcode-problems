<h2><a href="https://leetcode.com/problems/roman-to-integer/">13. Roman to Integer</a></h2><h3>Easy</h3><hr><div><p>Roman numerals are represented by seven different symbols:&nbsp;<code style="font-family: monospace, Bangla103, sans-serif;">I</code>, <code style="font-family: monospace, Bangla103, sans-serif;">V</code>, <code style="font-family: monospace, Bangla103, sans-serif;">X</code>, <code style="font-family: monospace, Bangla103, sans-serif;">L</code>, <code style="font-family: monospace, Bangla103, sans-serif;">C</code>, <code style="font-family: monospace, Bangla103, sans-serif;">D</code> and <code style="font-family: monospace, Bangla103, sans-serif;">M</code>.</p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla103, sans-serif;"><strong>Symbol</strong>       <strong>Value</strong>
I             1
V             5
X             10
L             50
C             100
D             500
M             1000</pre>

<p>For example,&nbsp;<code style="font-family: monospace, Bangla103, sans-serif;">2</code> is written as <code style="font-family: monospace, Bangla103, sans-serif;">II</code>&nbsp;in Roman numeral, just two ones added together. <code style="font-family: monospace, Bangla103, sans-serif;">12</code> is written as&nbsp;<code style="font-family: monospace, Bangla103, sans-serif;">XII</code>, which is simply <code style="font-family: monospace, Bangla103, sans-serif;">X + II</code>. The number <code style="font-family: monospace, Bangla103, sans-serif;">27</code> is written as <code style="font-family: monospace, Bangla103, sans-serif;">XXVII</code>, which is <code style="font-family: monospace, Bangla103, sans-serif;">XX + V + II</code>.</p>

<p>Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not <code style="font-family: monospace, Bangla103, sans-serif;">IIII</code>. Instead, the number four is written as <code style="font-family: monospace, Bangla103, sans-serif;">IV</code>. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as <code style="font-family: monospace, Bangla103, sans-serif;">IX</code>. There are six instances where subtraction is used:</p>

<ul>
	<li><code style="font-family: monospace, Bangla103, sans-serif;">I</code> can be placed before <code style="font-family: monospace, Bangla103, sans-serif;">V</code> (5) and <code style="font-family: monospace, Bangla103, sans-serif;">X</code> (10) to make 4 and 9.&nbsp;</li>
	<li><code style="font-family: monospace, Bangla103, sans-serif;">X</code> can be placed before <code style="font-family: monospace, Bangla103, sans-serif;">L</code> (50) and <code style="font-family: monospace, Bangla103, sans-serif;">C</code> (100) to make 40 and 90.&nbsp;</li>
	<li><code style="font-family: monospace, Bangla103, sans-serif;">C</code> can be placed before <code style="font-family: monospace, Bangla103, sans-serif;">D</code> (500) and <code style="font-family: monospace, Bangla103, sans-serif;">M</code> (1000) to make 400 and 900.</li>
</ul>

<p>Given a roman numeral, convert it to an integer.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla103, sans-serif;"><strong>Input:</strong> s = "III"
<strong>Output:</strong> 3
<strong>Explanation:</strong> III = 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla103, sans-serif;"><strong>Input:</strong> s = "LVIII"
<strong>Output:</strong> 58
<strong>Explanation:</strong> L = 50, V= 5, III = 3.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla103, sans-serif;"><strong>Input:</strong> s = "MCMXCIV"
<strong>Output:</strong> 1994
<strong>Explanation:</strong> M = 1000, CM = 900, XC = 90 and IV = 4.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code style="font-family: monospace, Bangla103, sans-serif;">1 &lt;= s.length &lt;= 15</code></li>
	<li><code style="font-family: monospace, Bangla103, sans-serif;">s</code> contains only&nbsp;the characters <code style="font-family: monospace, Bangla103, sans-serif;">('I', 'V', 'X', 'L', 'C', 'D', 'M')</code>.</li>
	<li>It is <strong>guaranteed</strong>&nbsp;that <code style="font-family: monospace, Bangla103, sans-serif;">s</code> is a valid roman numeral in the range <code style="font-family: monospace, Bangla103, sans-serif;">[1, 3999]</code>.</li>
</ul>
</div>