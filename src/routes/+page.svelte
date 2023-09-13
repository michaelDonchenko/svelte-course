<script lang="ts">
	let name = 'world';
	// javascript..
</script>

<div class="container mx-auto my-8">
	<h1 class="text-3xl font-bold text-center mb-8">What is svelte</h1>
	<div class="flex flex-col gap-2 mb-8">
		<p>
			Svelte is a modern JavaScript framework that has been making waves in the world of web
			development. Unlike traditional frameworks like React, Angular, or Vue, Svelte takes a
			fundamentally different approach to building web applications. It's often described as a
			"compiler" rather than a framework, and for good reason.
		</p>
		<p>
			At its core, Svelte is designed to address some of the common challenges and performance
			bottlenecks associated with other frameworks. Instead of shipping a large runtime library to
			the client's browser and relying on the virtual DOM for updates, Svelte compiles your
			components into highly optimized JavaScript code during the build process. This means that
			Svelte doesn't burden your users with unnecessary runtime code, resulting in faster load times
			and better performance.
		</p>
		<p>
			One of the key benefits of Svelte is its simplicity. It eliminates the need for complex
			abstractions like JSX or templates, opting for a straightforward HTML-like syntax. This makes
			it easier for developers to read, write, and reason about their code.
		</p>
		<p>
			In essence, Svelte enables you to write components in a way that feels natural and intuitive,
			all while delivering exceptional performance. It's a framework that's gained popularity for
			its ability to produce smaller bundle sizes, faster rendering, and a more enjoyable
			development experience.
		</p>
	</div>

	<h1 class="text-2xl font-bold text-center mb-8">Advantages of Svelte over other frameworks</h1>
	<div class="flex flex-col gap-2">
		<p>
			<b>Faster Load Times:</b> Svelte's compiler-driven approach eliminates the need for a runtime library,
			resulting in smaller bundle sizes. This leads to significantly faster load times for your web applications,
			enhancing the user experience.
		</p>
		<p>
			<b>No Virtual DOM</b>: Unlike many other frameworks, Svelte doesn't rely on a virtual DOM.
			Instead, it directly compiles your code into highly efficient JavaScript, reducing the
			overhead associated with virtual DOM diffing.
		</p>
		<p>
			<b>Easy Learning Curve:</b> Svelte's simple and HTML-centric syntax makes it easier for developers,
			both beginners and experienced, to quickly get up to speed with the framework. There's no need
			to learn complex templating languages or JSX.
		</p>
		<p>
			<b>Reactivity Out of the Box:</b> Svelte provides built-in reactivity without the need for additional
			state management libraries. This simplifies data handling and reduces the boilerplate code found
			in some other frameworks.
		</p>
		<p>
			<b>Component-based Architecture:</b> Svelte embraces the component-based architecture, making it
			easy to create reusable and maintainable UI components for your applications.
		</p>
		<p>
			<b>Optimized for Performance:</b> Svelte's focus on performance optimization is evident in its
			smaller bundle sizes, faster rendering, and reduced runtime overhead. This can lead to improved
			SEO and user engagement.
		</p>
		<p>
			<b>Ecosystem and Community:</b> While Svelte's ecosystem is still growing, it has an active and
			passionate community of developers, and a growing number of third-party libraries and tools are
			emerging to support it.
		</p>
		<p>
			In summary, Svelte's advantages lie in its performance, simplicity, and developer-friendly
			approach. It's a framework that challenges conventional thinking in web development, offering
			a fresh and efficient way to build modern web applications.
		</p>
	</div>
</div>

<h1 class="text-2xl font-bold text-center mb-8">Hello {name} example!</h1>

<style>
	/* styles go here */
</style>
