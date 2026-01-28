import os
import json

STUDENTS_DIR = 'students'
OUTPUT_JSON = 'students.json'

def main():
    files = [f"{STUDENTS_DIR}/" + fname for fname in os.listdir(STUDENTS_DIR) if fname.endswith('.js')]
    with open(OUTPUT_JSON, 'w') as f:
        json.dump(files, f, indent=2)
    print(f"Wrote {OUTPUT_JSON} with {len(files)} student files.")

if __name__ == '__main__':
    main()
