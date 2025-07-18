import Fragment from "~utilities/Fragment/index.ts"

// Head elements for this page - will be extracted by the build system
export function Head() {
	return (
		<>
			<title>@sitebender/metadata-components - Semantic HTML Components</title>
			<meta
				name="description"
				content="Semantic HTML components for rich text markup with structured data. Transform plain text into accessible, SEO-optimized content with Schema.org and JSON-LD support."
			/>
		</>
	)
}

export default function Home() {
	return (
		<main class="home">
			<header class="hero">
				<h1>@sitebender/metadata-components</h1>
				<p class="tagline">
					Semantic HTML components for rich text markup with structured data
				</p>
			</header>

			<section class="overview">
				<h2>Transform Plain Text into Rich Semantic Content</h2>
				<p>
					Our metadata components library extends basic HTML elements with
					Schema.org and Dublin Core metadata to create a semantic web of
					meaning. Perfect for academic publishing, literary websites, and
					technical documentation.
				</p>
			</section>

			<section class="features">
				<h2>Key Features</h2>
				<ul>
					<li>
						<strong>Semantic Enhancement:</strong>{" "}
						Converts simple text into semantic HTML with embedded structured
						data
					</li>
					<li>
						<strong>Accessibility-First:</strong>{" "}
						Full WCAG 2.3 AAA compliance with screen reader support
					</li>
					<li>
						<strong>SEO Optimization:</strong>{" "}
						Automatic generation of rich snippets and knowledge graph data
					</li>
					<li>
						<strong>Zero Dependencies:</strong>{" "}
						No client-side JavaScript frameworks required
					</li>
					<li>
						<strong>TypeScript Support:</strong>{" "}
						Complete type safety and IntelliSense
					</li>
				</ul>
			</section>

			<section class="quick-start">
				<h2>Quick Start</h2>
				<pre><code>import &#123; TechnicalTerm, Book, Dialogue &#125; from "@sitebender/metadata-components"</code></pre>
				<p>
					<a href="/components">Browse Components</a> |
					<a href="/examples">View Examples</a> |
					<a href="/playground">Try the Playground</a>
				</p>
			</section>
		</main>
	)
}
