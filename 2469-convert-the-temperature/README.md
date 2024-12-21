<h2><a href="https://leetcode.com/problems/convert-the-temperature/">2469. Convert the Temperature</a></h2><h3>Easy</h3><hr><div><p>You are given a non-negative floating point number rounded to two decimal places <code style="font-family: monospace, Bangla735, sans-serif;">celsius</code>, that denotes the <strong>temperature in Celsius</strong>.</p>

<p>You should convert Celsius into <strong>Kelvin</strong> and <strong>Fahrenheit</strong> and return it as an array <code style="font-family: monospace, Bangla735, sans-serif;">ans = [kelvin, fahrenheit]</code>.</p>

<p>Return <em>the array <code style="font-family: monospace, Bangla735, sans-serif;">ans</code>. </em>Answers within <code style="font-family: monospace, Bangla735, sans-serif;">10<sup>-5</sup></code> of the actual answer will be accepted.</p>

<p><strong>Note that:</strong></p>

<ul>
	<li><code style="font-family: monospace, Bangla735, sans-serif;">Kelvin = Celsius + 273.15</code></li>
	<li><code style="font-family: monospace, Bangla735, sans-serif;">Fahrenheit = Celsius * 1.80 + 32.00</code></li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla735, sans-serif;"><strong>Input:</strong> celsius = 36.50
<strong>Output:</strong> [309.65000,97.70000]
<strong>Explanation:</strong> Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla735, sans-serif;"><strong>Input:</strong> celsius = 122.11
<strong>Output:</strong> [395.26000,251.79800]
<strong>Explanation:</strong> Temperature at 122.11 Celsius converted in Kelvin is 395.26 and converted in Fahrenheit is 251.798.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code style="font-family: monospace, Bangla735, sans-serif;">0 &lt;= celsius &lt;= 1000</code></li>
</ul>
</div>