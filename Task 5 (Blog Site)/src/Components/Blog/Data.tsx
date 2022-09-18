import Background from "../../Assets/Images/typescript-cover-image.jpg";
import Subset from "../../Assets/Images/Js-subset.png";
import Transformation from "../../Assets/Images/Js-ts-transformation.png";
import Code from "../UI/Code";
import ColorBackground from "../UI/ColorBackground";
import Headings from "./Headings";

const Data = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="h-auto w-full">
        <img
          src={Background}
          className="w-full object-cover h-[600px]"
          alt="mainBackgroud"
        />
      </div>
      <div className="text-xl py-1 w-full md:w-[80%] bg-white flex justify-center items-center flex-col">
        <Headings heading="Getting Started With React.JS" />
        <div className="w-[80%]">
          <p></p>
          <br />
          React 18 was years in the making, and with it brought valuable lessons
          for the React team. Its release was the result of many years of
          research and exploring many paths. Some of those paths were
          successful; many more were dead-ends that led to new insights. One
          lesson we’ve learned is that it’s frustrating for the community to
          wait for new features without having insight into these paths that
          we’re exploring. We typically have a number of projects being worked
          on at any time, ranging from the more experimental to the clearly
          defined. Looking ahead, we’d like to start regularly sharing more
          about what we’ve been working on with the community across these
          projects. To set expectations, this is not a roadmap with clear
          timelines. Many of these projects are under active research and are
          difficult to put concrete ship dates on. They may possibly never even
          ship in their current iteration depending on what we learn. Instead,
          we want to share with you the problem spaces we’re actively thinking
          about, and what we’ve learned so far.
          <Headings heading="Server Components" />
          We announced an experimental demo of React Server Components (RSC) in
          December 2020. Since then we’ve been finishing up its dependencies in
          React 18, and working on changes inspired by experimental feedback. In
          particular, we’re abandoning the idea of having forked I/O libraries
          (eg react-fetch), and instead adopting an async/await model for better
          compatibility. This doesn’t technically block RSC’s release because
          you can also use routers for data fetching. Another change is that
          we’re also moving away from the file extension approach in favor of
          annotating boundaries. We’re working together with Vercel and Shopify
          to unify bundler support for shared semantics in both Webpack and
          Vite. Before launch, we want to make sure that the semantics of RSCs
          are the same across the whole React ecosystem. This is the major
          blocker for reaching stable.
          <br />
          <p></p>
          <Headings heading="Asset Loading" />
          <p>
            <img
              src={Transformation}
              className="h-[180px] w-[380px] inline float-left mr-4 "
              alt="jsTsTransformation"
            />
            Currently, assets like scripts, external styles, fonts, and images
            are typically preloaded and loaded using external systems. This can
            make it tricky to coordinate across new environments like streaming,
            server components, and more. We’re looking at adding APIs to preload
            and load deduplicated external assets through React APIs that work
            in all React environments. We’re also looking at having these
            support Suspense so you can have images, CSS, and fonts that block
            display until they’re loaded but don’t block streaming and
            concurrent rendering. This can help avoid “popcorning“ as the
            visuals pop and layout shifts.
          </p>
          <Headings
            heading="
            Static Server Rendering Optimizations"
          />
          <p>
            Static Site Generation (SSG) and Incremental Static Regeneration
            (ISR) are great ways to get performance for cacheable pages, but we
            think we can add features to improve performance of dynamic Server
            Side Rendering (SSR) – especially when most but not all of the
            content is cacheable. We’re exploring ways to optimize server
            rendering utilizing compilation and static passes.
          </p>
          <Headings heading="React Optimizing Compiler" />
          <p className="py-5">
            We gave an early preview of React Forget at React Conf 2021. It’s a
            compiler that automatically generates the equivalent of useMemo and
            useCallback calls to minimize the cost of re-rendering, while
            retaining React’s programming model. Recently, we finished a rewrite
            of the compiler to make it more reliable and capable. This new
            architecture allows us to analyze and memoize more complex patterns
            such as the use of local mutations, and opens up many new
            compile-time optimization opportunities beyond just being on par
            with memoization hooks. We’re also working on a playground for
            exploring many aspects of the compiler. While the goal of the
            playground is to make development of the compiler easier, we think
            that it will make it easier to try it out and build intuition for
            what the compiler does. It reveals various insights into how it
            works under the hood, and live renders the compiler’s outputs as you
            type. This will be shipped together with the compiler when it’s
            released.
          </p>
          <Headings heading="Offscreen" />
          <p className="py-2">
            <ul>
              Today, if you want to hide and show a component, you have two
              options. One is to add or remove it from the tree completely. The
              problem with this approach is that the state of your UI is lost
              each time you unmount, including state stored in the DOM, like
              scroll position. The other option is to keep the component mounted
              and toggle the appearance visually using CSS. This preserves the
              state of your UI, but it comes at a performance cost, because
              React must keep rendering the hidden component and all of its
              children whenever it receives new updates. Offscreen introduces a
              third option: hide the UI visually, but deprioritize its content.
              The idea is similar in spirit to the content-visibility CSS
              property: when content is hidden, it doesn’t need to stay in sync
              with the rest of the UI. React can defer the rendering work until
              the rest of the app is idle, or until the content becomes visible
              again. Offscreen is a low level capability that unlocks high level
              features. Similar to React’s other concurrent features like
              startTransition, in most cases you won’t interact with the
              Offscreen API directly, but instead via an opinionated framework
              to implement patterns like:
              <li className="py-3"></li>
              <li className="py-3">
                {" "}
                <b>Instant transitions.</b> Some routing frameworks already
                prefetch data to speed up subsequent navigations, like when
                hovering over a link. With Offscreen, they’ll also be able to
                prerender the next screen in the background.
              </li>
              <li className="py-3">
                <b>Reusable state.</b> Similarly, when navigating between routes
                or tabs, you can use Offscreen to preserve the state of the
                previous screen so you can switch back and pick up where you
                left off.
              </li>
              <li className="py-3">
                <b>Virtualized list rendering.</b> When displaying large lists
                of items, virtualized list frameworks will prerender more rows
                than are currently visible. You can use Offscreen to prerender
                the hidden rows at a lower priority than the visible items in
                the list.
              </li>
              <p>
                <b>Backgrounded content.</b> We’re also exploring a related
                feature for deprioritizing content in the background without
                hiding it, like when displaying a modal overlay.
              </p>
            </ul>
          </p>
          <p className="py-2">
            <Headings heading="Transition Tracing " />
            Currently, React has two profiling tools. The original Profiler
            shows an overview of all the commits in a profiling session. For
            each commit, it also shows all components that rendered and the
            amount of time it took for them to render. We also have a beta
            version of a Timeline Profiler introduced in React 18 that shows
            when components schedule updates and when React works on these
            updates. Both of these profilers help developers identify
            performance problems in their code.
            <br />
            <li className="py-3">
              We’ve realized that developers don’t find knowing about individual
              slow commits or components out of context that useful. It’s more
              useful to know about what actually causes the slow commits. And
              that developers want to be able to track specific interactions (eg
              a button click, an initial load, or a page navigation) to watch
              for performance regressions and to understand why an interaction
              was slow and how to fix it.
            </li>
            <li className="py-2">
              We previously tried to solve this issue by creating an Interaction
              Tracing API, but it had some fundamental design flaws that reduced
              the accuracy of tracking why an interaction was slow and sometimes
              resulted in interactions never ending. We ended up removing this
              API because of these issues.
            </li>
            <li className="py-2">
              We are working on a new version for the Interaction Tracing API
              (tentatively called Transition Tracing because it is initiated via
              startTransition) that solves these problems.
            </li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Data;
