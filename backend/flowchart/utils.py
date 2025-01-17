from .python_flowcharts import PythonFlowchartGenerator
from .java_flowcharts import JavaFlowchartGenerator
from django.conf import settings
from django.utils.text import slugify
import os

def process_file(directory, author, language, doc_id):
    if language=='python':
        process = PythonFlowchartGenerator(directory, author, doc_id)
    elif language == 'java':
        process = JavaFlowchartGenerator(directory, author, doc_id)
    else:
        return {'error': f"{language} not supported for flowchart generation"}
    
    classes = process.analyze_directory()

    if classes.get('error'):
        return classes
        
    flowcharts = process.generate_flowcharts(classes)
    
    # if png_result.get('error'):  # Check for errors in diagram generation
    #     return png_result

    # # Prepare file paths and names
    # img_path = png_result['img_path']
    # media_root = settings.MEDIA_ROOT  # Use physical path for saving files
    safe_directory = slugify(directory)  # Converts "my directory" -> "my-directory"
    file_name = f"flowchart_{safe_directory}.pdf"
    output_dir = os.path.join(settings.MEDIA_ROOT, author, "results")
    os.makedirs(output_dir, exist_ok=True)  # Creates the directory if it doesn't exist
    output_path = os.path.join(output_dir, file_name)

    # Generate the PDF
    process.generate_pdf(flowcharts, output_path)
    print(output_path)
    # Return the success response with file name and path
    return {
        'file_name': file_name,
        'file_path': output_path
    }