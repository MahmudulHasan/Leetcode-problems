<h2><a href="https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/">3194. Minimum Average of Smallest and Largest Elements</a></h2><h3>Easy</h3><hr><div><p>You have an array of floating point numbers <code style="font-family: monospace, Bangla326, sans-serif;">averages</code> which is initially empty. You are given an array <code style="font-family: monospace, Bangla326, sans-serif;">nums</code> of <code style="font-family: monospace, Bangla326, sans-serif;">n</code> integers where <code style="font-family: monospace, Bangla326, sans-serif;">n</code> is even.</p>

<p>You repeat the following procedure <code style="font-family: monospace, Bangla326, sans-serif;">n / 2</code> times:</p>

<ul>
	<li>Remove the <strong>smallest</strong> element, <code style="font-family: monospace, Bangla326, sans-serif;">minElement</code>, and the <strong>largest</strong> element <code style="font-family: monospace, Bangla326, sans-serif;">maxElement</code>,&nbsp;from <code style="font-family: monospace, Bangla326, sans-serif;">nums</code>.</li>
	<li>Add <code style="font-family: monospace, Bangla326, sans-serif;">(minElement + maxElement) / 2</code> to <code style="font-family: monospace, Bangla326, sans-serif;">averages</code>.</li>
</ul>

<p>Return the <strong>minimum</strong> element in <code style="font-family: monospace, Bangla326, sans-serif;">averages</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io" style="font-family: Menlo, Bangla326, sans-serif;">nums = [7,8,3,4,15,13,4,1]</span></p>

<p><strong>Output:</strong> <span class="example-io" style="font-family: Menlo, Bangla326, sans-serif;">5.5</span></p>

<p><strong>Explanation:</strong></p>

<table>
	<tbody>
		<tr>
			<th>step</th>
			<th>nums</th>
			<th>averages</th>
		</tr>
		<tr>
			<td>0</td>
			<td>[7,8,3,4,15,13,4,1]</td>
			<td>[]</td>
		</tr>
		<tr>
			<td>1</td>
			<td>[7,8,3,4,13,4]</td>
			<td>[8]</td>
		</tr>
		<tr>
			<td>2</td>
			<td>[7,8,4,4]</td>
			<td>[8,8]</td>
		</tr>
		<tr>
			<td>3</td>
			<td>[7,4]</td>
			<td>[8,8,6]</td>
		</tr>
		<tr>
			<td>4</td>
			<td>[]</td>
			<td>[8,8,6,5.5]</td>
		</tr>
	</tbody>
</table>
The smallest element of averages, 5.5, is returned.</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io" style="font-family: Menlo, Bangla326, sans-serif;">nums = [1,9,8,3,10,5]</span></p>

<p><strong>Output:</strong> <span class="example-io" style="font-family: Menlo, Bangla326, sans-serif;">5.5</span></p>

<p><strong>Explanation:</strong></p>

<table>
	<tbody>
		<tr>
			<th>step</th>
			<th>nums</th>
			<th>averages</th>
		</tr>
		<tr>
			<td>0</td>
			<td><span class="example-io" style="font-family: Menlo, Bangla326, sans-serif;">[1,9,8,3,10,5]</span></td>
			<td>[]</td>
		</tr>
		<tr>
			<td>1</td>
			<td><span class="example-io" style="font-family: Menlo, Bangla326, sans-serif;">[9,8,3,5]</span></td>
			<td>[5.5]</td>
		</tr>
		<tr>
			<td>2</td>
			<td><span class="example-io" style="font-family: Menlo, Bangla326, sans-serif;">[8,5]</span></td>
			<td>[5.5,6]</td>
		</tr>
		<tr>
			<td>3</td>
			<td>[]</td>
			<td>[5.5,6,6.5]</td>
		</tr>
	</tbody>
</table>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io" style="font-family: Menlo, Bangla326, sans-serif;">nums = [1,2,3,7,8,9]</span></p>

<p><strong>Output:</strong> <span class="example-io" style="font-family: Menlo, Bangla326, sans-serif;">5.0</span></p>

<p><strong>Explanation:</strong></p>

<table>
	<tbody>
		<tr>
			<th>step</th>
			<th>nums</th>
			<th>averages</th>
		</tr>
		<tr>
			<td>0</td>
			<td><span class="example-io" style="font-family: Menlo, Bangla326, sans-serif;">[1,2,3,7,8,9]</span></td>
			<td>[]</td>
		</tr>
		<tr>
			<td>1</td>
			<td><span class="example-io" style="font-family: Menlo, Bangla326, sans-serif;">[2,3,7,8]</span></td>
			<td>[5]</td>
		</tr>
		<tr>
			<td>2</td>
			<td><span class="example-io" style="font-family: Menlo, Bangla326, sans-serif;">[3,7]</span></td>
			<td>[5,5]</td>
		</tr>
		<tr>
			<td>3</td>
			<td><span class="example-io" style="font-family: Menlo, Bangla326, sans-serif;">[]</span></td>
			<td>[5,5,5]</td>
		</tr>
	</tbody>
</table>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code style="font-family: monospace, Bangla326, sans-serif;">2 &lt;= n == nums.length &lt;= 50</code></li>
	<li><code style="font-family: monospace, Bangla326, sans-serif;">n</code> is even.</li>
	<li><code style="font-family: monospace, Bangla326, sans-serif;">1 &lt;= nums[i] &lt;= 50</code></li>
</ul>
</div>