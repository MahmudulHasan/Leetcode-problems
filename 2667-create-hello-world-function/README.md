<h2><a href="https://leetcode.com/problems/create-hello-world-function/">2667. Create Hello World Function</a></h2><h3>Easy</h3><hr><div>Write a function&nbsp;<code style="font-family: monospace, Bangla425, sans-serif;">createHelloWorld</code>.&nbsp;It should return a new function that always returns&nbsp;<code style="font-family: monospace, Bangla425, sans-serif;">"Hello World"</code>.
<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla425, sans-serif;"><strong>Input:</strong> args = []
<strong>Output:</strong> "Hello World"
<strong>Explanation:</strong>
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre style="font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace, Bangla425, sans-serif;"><strong>Input:</strong> args = [{},null,42]
<strong>Output:</strong> "Hello World"
<strong>Explanation:</strong>
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code style="font-family: monospace, Bangla425, sans-serif;">0 &lt;= args.length &lt;= 10</code></li>
</ul>
</div>