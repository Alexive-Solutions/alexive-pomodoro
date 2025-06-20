@echo off
for /f "tokens=1-4 delims=/ " %%a in ("%date%") do (
    set date=%%d-%%b-%%c
)
for /f "tokens=1-2 delims=: " %%a in ("%time%") do (
    set time=%%a%%b
)

set /p msg="Commit message: "
git add .
git commit -m "%msg% [%date% %time%]"
git push
