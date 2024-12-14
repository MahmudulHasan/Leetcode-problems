<h2><a href="https://leetcode.com/problems/richest-customer-wealth/">1672. Richest Customer Wealth</a></h2><h3>Easy</h3><hr><div><p>You are given an <code style="font-family: monospace, Bangla197, sans-serif;">m x n</code> integer grid <code style="font-family: monospace, Bangla197, sans-serif;">accounts</code> where <code style="font-family: monospace, Bangla197, sans-serif;">accounts[i][j]</code> is the amount of money the <code style="font-family: monospace, Bangla197, sans-serif;">i​​​​​<sup>​​​​​​th</sup>​​​​</code> customer has in the <code style="font-family: monospace, Bangla197, sans-serif;">j​​​​​<sup>​​​​​​th</sup></code>​​​​ bank. Return<em> the <strong>wealth</strong> that the richest customer has.</em></p>

<p>A customer's <strong>wealth</strong> is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum <strong>wealth</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla197, sans-serif;"><strong>Input:</strong> accounts = [[1,2,3],[3,2,1]]
<strong>Output:</strong> 6
<strong>Explanation</strong><strong>:</strong>
<code style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla197, sans-serif;">1st customer has wealth = 1 + 2 + 3 = 6
</code><code style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla197, sans-serif;">2nd customer has wealth = 3 + 2 + 1 = 6
</code>Both customers are considered the richest with a wealth of 6 each, so return 6.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla197, sans-serif;"><strong>Input:</strong> accounts = [[1,5],[7,3],[3,5]]
<strong>Output:</strong> 10
<strong>Explanation</strong>: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.</pre>

<p><strong class="example">Example 3:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla197, sans-serif;"><strong>Input:</strong> accounts = [[2,8,7],[7,1,3],[1,9,5]]
<strong>Output:</strong> 17
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code style="font-family: monospace, Bangla197, sans-serif;">m ==&nbsp;accounts.length</code></li>
	<li><code style="font-family: monospace, Bangla197, sans-serif;">n ==&nbsp;accounts[i].length</code></li>
	<li><code style="font-family: monospace, Bangla197, sans-serif;">1 &lt;= m, n &lt;= 50</code></li>
	<li><code style="font-family: monospace, Bangla197, sans-serif;">1 &lt;= accounts[i][j] &lt;= 100</code></li>
</ul>
</div>