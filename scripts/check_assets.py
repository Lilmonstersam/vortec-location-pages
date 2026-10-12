"""Fail the deployment when a local HTML asset is missing."""

from html.parser import HTMLParser
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


class LocalAssets(HTMLParser):
    def __init__(self):
        super().__init__()
        self.paths = []

    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        for attribute in ("src", "href"):
            value = values.get(attribute, "")
            if value and not value.startswith(("#", "//", "http:", "https:", "mailto:", "tel:")):
                self.paths.append(value.split("?", 1)[0].split("#", 1)[0])


parser = LocalAssets()
parser.feed((ROOT / "index.html").read_text(encoding="utf-8"))
missing = [path for path in parser.paths if not (ROOT / path).is_file()]
if missing:
    raise SystemExit(f"Missing local assets: {', '.join(missing)}")
print(f"Verified {len(parser.paths)} local asset references")
