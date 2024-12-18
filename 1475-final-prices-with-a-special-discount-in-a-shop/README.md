<h2><a href="https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/">1475. Final Prices With a Special Discount in a Shop</a></h2><h3>Easy</h3><hr><div><p>You are given an integer array <code style="font-family: monospace, Bangla269, sans-serif;">prices</code> where <code style="font-family: monospace, Bangla269, sans-serif;">prices[i]</code> is the price of the <code style="font-family: monospace, Bangla269, sans-serif;">i<sup>th</sup></code> item in a shop.</p>

<p>There is a special discount for items in the shop. If you buy the <code style="font-family: monospace, Bangla269, sans-serif;">i<sup>th</sup></code> item, then you will receive a discount equivalent to <code style="font-family: monospace, Bangla269, sans-serif;">prices[j]</code> where <code style="font-family: monospace, Bangla269, sans-serif;">j</code> is the minimum index such that <code style="font-family: monospace, Bangla269, sans-serif;">j &gt; i</code> and <code style="font-family: monospace, Bangla269, sans-serif;">prices[j] &lt;= prices[i]</code>. Otherwise, you will not receive any discount at all.</p>

<p>Return an integer array <code style="font-family: monospace, Bangla269, sans-serif;">answer</code> where <code style="font-family: monospace, Bangla269, sans-serif;">answer[i]</code> is the final price you will pay for the <code style="font-family: monospace, Bangla269, sans-serif;">i<sup>th</sup></code> item of the shop, considering the special discount.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla269, sans-serif;"><strong>Input:</strong> prices = [8,4,6,2,3]
<strong>Output:</strong> [4,2,4,2,3]
<strong>Explanation:</strong> 
For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4.
For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2.
For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.
For items 3 and 4 you will not receive any discount at all.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla269, sans-serif;"><strong>Input:</strong> prices = [1,2,3,4,5]
<strong>Output:</strong> [1,2,3,4,5]
<strong>Explanation:</strong> In this case, for all items, you will not receive any discount at all.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla269, sans-serif;"><strong>Input:</strong> prices = [10,1,1,6]
<strong>Output:</strong> [9,0,1,6]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code style="font-family: monospace, Bangla269, sans-serif;">1 &lt;= prices.length &lt;= 500</code></li>
	<li><code style="font-family: monospace, Bangla269, sans-serif;">1 &lt;= prices[i] &lt;= 1000</code></li>
</ul>
</div>