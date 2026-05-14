"""
Best-effort PDF accessibility fixes for the McMurtry site.

For each PDF in the manifest below this script:
  - Sets the document language to en-US if missing.
  - Sets a human-readable title in the document info dictionary if missing.
  - Reports what it changed.

It deliberately does NOT fake a tag tree. Real tags require semantic
understanding of the document layout (an Acrobat Pro / source re-export job).
Marking a PDF as `/MarkInfo /Marked True` without a real `/StructTreeRoot`
would just trade one Siteimprove finding for another.

Usage:
    python scripts/fix-pdf-metadata.py
"""

import pikepdf
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

PDFS = [
    {
        "path": ROOT / "static" / "mis_safety.pdf",
        "title": "McMurtry Innovation Space (MIS) Safety",
        "lang": "en-US",
    },
    {
        "path": ROOT / "static" / "mcmurtry_resources.pdf",
        "title": "McMurtry College Resources",
        "lang": "en-US",
    },
    {
        "path": ROOT / "static" / "documents" / "mcm_constitution_jan_2024.pdf",
        "title": "McMurtry College Constitution (January 2024)",
        "lang": "en-US",
    },
]


def fix_pdf(path: Path, title: str, lang: str) -> dict:
    changes = []
    with pikepdf.open(path, allow_overwriting_input=True) as pdf:
        root = pdf.Root

        existing_lang = root.get("/Lang")
        if not existing_lang:
            root["/Lang"] = lang
            changes.append(f"set /Lang = {lang}")

        meta = pdf.docinfo
        existing_title = str(meta.get("/Title") or "")
        # Overwrite empty titles AND obvious filename-as-title (e.g. "Foo.docx").
        looks_like_filename = existing_title.lower().endswith((".docx", ".doc", ".pdf"))
        if not existing_title or looks_like_filename:
            meta["/Title"] = title
            changes.append(f"set Title = {title}")

        if changes:
            pdf.save(path)
    return {"path": str(path.relative_to(ROOT)), "changes": changes}


def main() -> int:
    any_changed = False
    for entry in PDFS:
        if not entry["path"].exists():
            print(f"  missing: {entry['path']}")
            continue
        result = fix_pdf(entry["path"], entry["title"], entry["lang"])
        if result["changes"]:
            any_changed = True
            print(f"  {result['path']}:")
            for c in result["changes"]:
                print(f"    - {c}")
        else:
            print(f"  {result['path']}: already compliant, no changes")

    if not any_changed:
        print("\nAll PDFs already had Lang + Title metadata.")
    else:
        print("\nDone. Remember to re-deploy so the updated PDFs replace the live ones.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
