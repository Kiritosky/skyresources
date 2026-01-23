import { DocsLayout } from "../../components/docs-layout";
import { ResourceLinks } from "../../components/resource-links";

export default function NewsPage() {
    return (
        <DocsLayout
            title="Shards & Hunting"
            description="Optimize your shard farming and mob hunting strategies."
        >
            <ResourceLinks
                title="Hunting resources"
                links={[
                    {
                        title: "SkyShards",
                        description: "Comprehensive shard farming guide.",
                        href: "https://skyshards.com/",
                        tag: "Guide",
                    },
                ]}
            />
        </DocsLayout>
    );
}