## Hi there 👋 I'll come back and fill in some organization-level descriptions, including member bios

```mermaid
graph LR;
    ggdl/go-->ggp-db;
    ggdl/go-->ggdl-gm;
    ggp-db--->ggp-site;
    ggdl-api & ggdl/ts --> ggdl-bot & vue-client;
    vue-client <-.-> ggp-site;
    vue-client <-.-> ggdl-gm;
    ggdl-api-->ggdl-gm;
    ggp-games--->ggp-site
```
